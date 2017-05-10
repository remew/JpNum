'use strict';
const factors = require('./lib/factors');
const {add, mul} = require('./lib/calc');
const reverse = require('./lib/reverse');

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

const digits = Object.freeze([
    {j: '十', a: '10'},
    {j: '拾', a: '10'},
    {j: '百', a: '100'},
    {j: '千', a: '1000'},
]);

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
    const result = reverse(factors).reduce((result, factor) => {
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

/**
 * Convert to Arabic numbers from Japanese numbers.
 * @param {String} japanese - natural japanese numbers
 * @return {String}
 */
module.exports = function toArabic(japanese) {
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
