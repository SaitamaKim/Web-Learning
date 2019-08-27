'use strict';

// read from 'sample.png'

const fs = require('fs');

console.log('>>> BEGIN >>>')

/* 
同步方法使用try-catch处理error
*/

var data = fs.readFileSync('sample.png');
console.log(data);
console.log(data.length/1024 + ' Kbytes');

console.log('>>> END >>>')
