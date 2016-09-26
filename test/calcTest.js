'use strict';

const assert = require('assert');
const {add, mul} = require('../src/calc');

describe('calc.js', () => {
    describe('#add', () => {
        it('should be return 42 when given 10 and 32', () => {
            assert.equal(add('10', '32'), '42');
        });
        it('should be return 1001 when given 1000 and 1', () => {
            assert.equal(add('1000', '1'), '1001');
        });
        it('should be return 100 when given 99 and 1', () => {
            assert.equal(add('99', '1'), '100');
        });
    });
    describe('#mul', () => {
        it('should be return 42 when given 2 and 21', () => {
            assert.equal(mul('2', '21'), '42');
        });
        it('should be return 121 when given 11 and 11', () => {
            assert.equal(mul('11', '11'), '121');
        });
        it('should be return 32111247 when given 9793 and 3279', () => {
            assert.equal(mul('9793', '3279'), '32111247');
        });
        it('should be return 33764558458674967278141271247 when given 141592653589793 and 238462643383279', () => {
            assert.equal(mul('141592653589793', '238462643383279'), '33764558458674967278141271247');
        });
    });
});
