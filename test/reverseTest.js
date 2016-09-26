'use strict';

const assert = require('assert');
const reverse = require('../src/reverse');

describe('reverse.js', () => {
    beforeEach(() => {
        this.testArray = [1, 2, 3, 4];
    });
    describe('#reverse', () => {
        it('reverse an array', () => {
            assert.deepEqual(reverse(this.testArray), [4, 3, 2, 1]);
        });
        it('create difference instance', () => {
            assert(reverse(this.testArray) !== this.testArray);
        });
    });
});

