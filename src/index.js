'use strict';

module.exports = {
    toArabic
};

const J2A = Object.freeze({
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
    '十': '',
    '拾': ''
});

/**
 * Convert to Arabic numbers from Japanese numbers.
 * @param {String} japanese - natural japanese numbers
 * @return {String}
 */
function toArabic(japanese) {
    return _toArabic('', japanese, 0);

    function _toArabic(result, j, digit) {
        const len = j.length;
        if (len === digit) {
            return result;
        }
        return _toArabic(J2A[j[len - digit - 1]] + result, j, digit + 1);
    }
}


