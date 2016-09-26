'use strict';

const assert = require('assert');
const {add, mul} = require('../src/calc');

describe('calc.js', () => {
    describe('#add', () => {
        it('add given two argument', () => {
            assert.equal(add('10', '32'), '42');
            assert.equal(add('1000', '1'), '1001');
            assert.equal(add('99', '1'), '100');
        });
        it('work if given integer', () => {
            assert.equal(add('10', 32), '42');
            assert.equal(add(10, '32'), '42');
            assert.equal(add(10, 32), '42');
        });
    });
    describe('#mul', () => {
        it('multiplication given two argument', () => {
            assert.equal(mul('2', '21'), '42');
            assert.equal(mul('11', '11'), '121');
            assert.equal(mul('9793', '3279'), '32111247');
            assert.equal(mul('141592653589793', '238462643383279'), '33764558458674967278141271247');
        });
        it('work if given integer', () => {
            assert.equal(mul(9793, '3279'), '32111247');
            assert.equal(mul('9793', 3279), '32111247');
            assert.equal(mul(9793, 3279), '32111247');
        });
    });
});
