'use strict';

const assert = require('assert');
const {toArabic} = require('../');

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
    });
});

