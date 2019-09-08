'use strict';

// read text from 'sample.txt'

const fs = require('fs');

console.log('>>> BEGIN >>>')
//如上边代码所示，基本上所有fs模块API的回调参数都有两个。
//第一个参数在有错误发生时等于异常对象，第二个参数始终用于返回API方法执行结果。
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(Buffer.from(data,'utf-8'));
    }
});

console.log('>>> END >>>')
