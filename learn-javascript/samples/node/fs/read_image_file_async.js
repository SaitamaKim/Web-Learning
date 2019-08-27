'use strict';

// read from 'sample.png'

const fs = require('fs');

console.log('>>> BEGIN >>>')

/* 
异步方法使用回调函数处理error
回调函数第一个参数是err
*/


fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length/1024 + ' Kbps');
    }
});

console.log('>>> END >>>')
