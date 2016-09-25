'use strict';

const assert = require('assert');
const {toArabic, toJapanese} = require('../');

describe('JapaneseNumbers', () => {
    describe('#toArabic', () => {
        it('should be return 42 when given 四十二', () => {
            assert.equal(toArabic('四十二'), '42');
        });
        it('should be return 100 when given 百', () => {
            assert.equal(toArabic('百'), '100');
        });
        it('should be return 6000053124710 when given 六兆五千三百十二万四千七百十', () => {
            assert.equal(toArabic('六兆五千三百十二万四千七百十'), '6000053124710');
        });
        it('should be return 1111111111111111 when given 千百十一兆千百十一億千百十一万千百十一', () => {
            assert.equal(toArabic('千百十一兆千百十一億千百十一万千百十一'), '1111111111111111');
        });
    });
    describe('#toJapanese', () => {
        it('should be return 四十二 when given 42', () => {
            assert.equal(toJapanese('42'), '四十二');
        });
        it('should be return 百 when given 100', () => {
            assert.equal(toJapanese('100'), '百');
        });
        it('should be return 六兆五千三百十二万四千七百十 when given 6000053124710', () => {
            assert.equal(toJapanese('6000053124710'), '六兆五千三百十二万四千七百十');
        });
        it('should be return 千百十一兆千百十一億千百十一万千百十一 when given 1111111111111111', () => {
            assert.equal(toJapanese('1111111111111111'), '千百十一兆千百十一億千百十一万千百十一');
        });
    });
});

