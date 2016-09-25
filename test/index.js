'use strict';

const assert = require('assert');
const {toArabic, toJapanese} = require('../');

describe('JapaneseNumbers', () => {
    describe('#toArabic', () => {
        it('converts Japanese numbers to Arabic numbers', () => {
            assert.equal(toArabic('四十二'), '42');
            assert.equal(toArabic('百'), '100');
            assert.equal(toArabic('六兆五千三百十二万四千七百十'), '6000053124710');
            assert.equal(toArabic('千百十一兆千百十一億千百十一万千百十一'), '1111111111111111');
        });
    });
    describe('#toJapanese', () => {
        it('converts Arabic numbers to Japanese numbers', () => {
            assert.equal(toJapanese('42'), '四十二');
            assert.equal(toJapanese('100'), '百');
            assert.equal(toJapanese('6000053124710'), '六兆五千三百十二万四千七百十');
            assert.equal(toJapanese('1111111111111111'), '千百十一兆千百十一億千百十一万千百十一');
        });
    });
});

