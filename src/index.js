'use strict';

const {add, mul} = require('./calc');

module.exports = {
    toArabic,
    toJapanese
};

const nums = Object.freeze({
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
    {j: '𥝱', a: '1000000000000000000000000'},
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
    return '';
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
                return add(result, mul(nums[numInfo.num], numInfo.factor));
            }, '0');
            return add(result, mul(num, numInfo.factor));
        }, '0');
}

// immutable reverse
function reverse(array) {
    return Array.from(array).reverse();
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



