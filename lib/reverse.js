'use strict';

/**
 * Reverse the given array.
 * Difference of Array#reverse is Array#reverse break itself but this function create new Array instance
 * @param {Array} array
 * @return {Array} reversed array
 */
module.exports = function reverse(array) {
    return Array.from(array).reverse();
};
