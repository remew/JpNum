'use strict';

const assert = require('assert');
const {toArabic, toJapanese} = require('../');

describe('JapaneseNumbers', () => {
    describe('#toArabic', () => {
        it('converts Japanese numbers to Arabic numbers', () => {
            assert.equal(toArabic('四十二'), '42');
            assert.equal(toArabic('六兆五千三百十二万四千七百十'), '6000053124710');
            assert.equal(toArabic('千百十一兆千百十一億千百十一万千百十一'), '1111111111111111');
            assert.equal(toArabic('一'), '1');
            assert.equal(toArabic('十'), '10');
            assert.equal(toArabic('百'), '100');
            assert.equal(toArabic('千'), '1000');
            assert.equal(toArabic('万'), '10000');
            assert.equal(toArabic('億'), '100000000');
            assert.equal(toArabic('兆'), '1000000000000');
            assert.equal(toArabic('京'), '10000000000000000');
        });
    });
    describe('#toJapanese', () => {
        it('converts Arabic numbers to Japanese numbers', () => {
            assert.equal(toJapanese('42'), '四十二');
            assert.equal(toJapanese('6000053124710'), '六兆五千三百十二万四千七百十');
            assert.equal(toJapanese('1111111111111111'), '千百十一兆千百十一億千百十一万千百十一');
            assert.equal(toJapanese('1'), '一');
            assert.equal(toJapanese('10'), '十');
            assert.equal(toJapanese('100'), '百');
            assert.equal(toJapanese('1000'), '千');
            assert.equal(toJapanese('10000'), '一万');
            assert.equal(toJapanese('100000000'), '一億');
            assert.equal(toJapanese('1000000000000'), '一兆');
            assert.equal(toJapanese('10000000000000000'), '一京');
        });
    });
});

