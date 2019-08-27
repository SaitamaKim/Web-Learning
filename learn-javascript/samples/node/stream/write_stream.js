'use strict';
//流是用fs模块创建的，但是流对象是属于stream.Readable或者stream.Writable的继承类
//fs模块和stream模块并非一个模块，也不是包含关系


const fs = require('fs');
//打开输入流
var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();

console.log('done.');
