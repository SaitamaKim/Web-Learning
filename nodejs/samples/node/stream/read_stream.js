'use strict';

const fs = require('fs');

//打开一个读文件流
//打开输出流之后后面的操作属于异步的  需要用on方法注册回调函数
var rs = fs.createReadStream('test.txt', 'utf-8');
//设置事件   data表示准备输出
rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});
//设置事件  end表示读写结束
rs.on('end', function () {
    console.log('END');
});
//设置事件  error表示出现错误
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});
