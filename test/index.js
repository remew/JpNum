'use strict';

const assert = require('assert');
const {toArabic} = require('../');

describe('Japanese Numbers', () => {
    describe('toArabic', () => {
        it('should be return 42 when given 四十二', () => {
            assert.equal(toArabic('四十二'), '42');
        });
        it('should be return 100 when given 百', () => {
            assert.equal(toArabic('百'), '100');
        });
    });
});

