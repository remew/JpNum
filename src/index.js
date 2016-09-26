'use strict';

const {add, mul} = require('./calc');
const reverse = require('./reverse');

module.exports = {
    toArabic,
    toJapanese
};

const jpNums = Object.freeze({
    '零': '0',
    '〇': '0',
    '一': '1',
    '壱': '1',
    '二': '2',
    '弐': '2',
    '三': '3',
    '参': '3',
    '四': '4',
    '五': '5',
    '伍': '5',
    '六': '6',
    '七': '7',
    '八': '8',
    '九': '9',
});

const arNums = Object.freeze({
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六',
    '7': '七',
    '8': '八',
    '9': '九',
});

const digits = Object.freeze([
    {j: '十', a: '10'},
    {j: '拾', a: '10'},
    {j: '百', a: '100'},
    {j: '千', a: '1000'},
]);

const factors = Object.freeze([
    {j: '万', a: '10000'},
    {j: '億', a: '100000000'},
    {j: '兆', a: '1000000000000'},
    {j: '京', a: '10000000000000000'},
    {j: '垓', a: '100000000000000000000'},
    // {j: '𥝱', a: '1000000000000000000000000'},
    {j: '秭', a: '1000000000000000000000000'},
    {j: '穣', a: '10000000000000000000000000000'},
    {j: '溝', a: '100000000000000000000000000000000'},
    {j: '澗', a: '1000000000000000000000000000000000000'},
    {j: '正', a: '10000000000000000000000000000000000000000'},
    {j: '載', a: '100000000000000000000000000000000000000000000'},
    {j: '極', a: '1000000000000000000000000000000000000000000000000'},
    {j: '恒河沙', a: '10000000000000000000000000000000000000000000000000000'},
    {j: '阿僧祇', a: '100000000000000000000000000000000000000000000000000000000'},
    {j: '那由他', a: '1000000000000000000000000000000000000000000000000000000000000'},
    {j: '不可思議', a: '10000000000000000000000000000000000000000000000000000000000000000'},
    {j: '無量大数', a: '100000000000000000000000000000000000000000000000000000000000000000000'},
]);

/**
 * Convert to Japanese numbers from Arabic numbers.
 * @param {String} num - natural arabic numbers
 * @return {String}
 */
function toJapanese(num) {
    if (num < 0) {
        throw new Error(`${num} is too much smaller`);
    }
    if (num.length > factors[factors.length - 1].a.length + 3) {
        throw new Error(`${num} is too much bigger`);
    }
    const numArray = [...num];
    const fourArray = [];
    while (numArray.length) {
        fourArray.push(pop4(numArray));
    }
    return fourArray.reduce((result, f, i) => {
        if (i === 0) {
            return result + join(f[0], f[1], f[2], f[3], '');
        }
        return join(f[0], f[1], f[2], f[3], factors[i - 1].j) + result;
    }, '');

    function pop4(array) {
        const result = [];
        for (let i = 0; i < 4; i++) {
            result.unshift(array.pop() || '0');
        }
        return result;
    }
    function join(_a, _b, _c, _d, unit) {
        const a = joinUnit(_a, '千');
        const b = joinUnit(_b, '百');
        const c = joinUnit(_c, '十');
        const d = joinUnit(_d, '', true);
        const joined = a + b + c + d;
        return joined !== '' ? a + b + c + d + unit : '';
        function joinUnit(num, unit, isLast = false) {
            if (num === '0') {
                return '';
            }
            if (num === '1') {
                return isLast ? '一' : unit;
            }
            return arNums[num] + unit;
        }
    }
}

/**
 * Convert to Arabic numbers from Japanese numbers.
 * @param {String} japanese - natural japanese numbers
 * @return {String}
 */
function toArabic(japanese) {
    return separateByFactors(japanese, factors)
        .map(info => {
            return {
                items: separateByFactors(info.num, digits),
                factor: info.factor
            };
        })
        .reduce((result, numInfo) => {
            const num = numInfo.items.reduce((result, numInfo) => {
                return add(result, mul(jpNums[numInfo.num], numInfo.factor));
            }, '0');
            return add(result, mul(num, numInfo.factor));
        }, '0');
}

function findFactor(str, factor) {
    const index = str.indexOf(factor);
    if (index !== -1) {
        const num = index === 0 ? '一' : str.substring(0, index);
        return {num, index};
    }
    return null;
}

function separateByFactors(str, factors) {
    // find from bigger factor
    const result = reverse(factors).reduce((result, factor, i) => {
        const info = findFactor(str, factor.j);
        if (info === null) {
            return result;
        }
        const {num, index} = info;
        str = str.substring(index + factor.j.length);
        result.push({num, factor: factor.a});
        return result;
    }, []);
    if (str.length !== 0) {
        result.push({num: str, factor: '1'});
    }
    return result;
}



