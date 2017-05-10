'use strict'
const factors = require('./lib/factors');

const arNums = Object.freeze({
    '0': '零',
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

/**
 * Convert to Japanese numbers from Arabic numbers.
 * @param {String} num - natural arabic numbers
 * @return {String}
 */
module.exports = function toJapanese(num) {
    if (num < 0) {
        throw new Error(`${num} is too much smaller`);
    }
    if (num.length > factors[factors.length - 1].a.length + 3) {
        throw new Error(`${num} is too much bigger`);
    }
    if (num === '0') {
        return arNums['0'];
    }
    const numArray = Array.from(num);
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
