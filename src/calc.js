'use strict';

/**
 * Add a and b
 * @param {String|int} a
 * @param {String|int} b
 * @return {String}
 */
function add(a, b) {
    a = Array.from(a.toString()).reverse();
    b = Array.from(b.toString()).reverse();
    const ans = [];
    const len = a.length < b.length ? b.length : a.length;
    let up = 0;
    for (let i = 0; i < len; i++) {
        const tmp = parseInt(a[i] || 0) + parseInt(b[i] || 0) + up;
        up = Math.floor(tmp / 10);
        ans.push(tmp % 10);
    }
    if (up !== 0) {
        ans.push(up);
    }
    return ans.reverse().join('');
}

/**
 * Multiplication a and b
 * @param {String|int} a
 * @param {String|int} b
 * @return {String}
 */
function mul(a, b) {
    a = Array.from(a.toString()).reverse();
    b = Array.from(b.toString()).reverse();
    const [outer, inner] = a.length < b.length ? [a, b] : [b, a];
    const oLen = outer.length;
    const iLen = inner.length;
    const ans = [];
    for (let i = 0; i < oLen; i++) {
        const num = parseInt(outer[i]);
        const line = Array.from({length: i}, () => '0');
        let carry = 0;
        for (let j = 0; j < iLen; j++) {
            const tmpAns = num * parseInt(inner[j]) + carry;
            carry = Math.floor(tmpAns / 10);
            line.push(tmpAns % 10);
        }
        if (carry !== 0) {
            line.push(carry);
        }
        ans.push(line.reverse().join(''));
    }
    return ans.reduce((result, line) => add(result, line));
}

module.exports = {
    add,
    mul,
};

