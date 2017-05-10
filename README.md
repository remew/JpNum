# JpNum
Converts between Arabic numbers and Japanese numbers (it is called 漢数字).

## Installation
```
$ npm install jp-num --save
```

## Example
```javascript
const {toArabic, toJapanese} = require('jp-num');

console.log(toArabic('四十二')); // => '42'
console.log(toJapanese('42')); // => '四十二'
console.log(toArabic('一無量大数'); // => '100000000000000000000000000000000000000000000000000000000000000000000'
```

if you want to use either `toArabic` or `toJapanese` only, you can write this.
```javascript
// only `toArabic`
const toArabic = require('jp-num/toArabic');

// only `toJapanese`
const toJapanese = require('jp-num/toJapanese');
```

## License
[MIT License](http://opensource.org/licenses/MIT)

