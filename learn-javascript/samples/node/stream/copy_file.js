'use strict';

// read binary data from 'sample.txt'

//最简单的文件拷贝方式。直接pipe 处理原理和copy_file2.js类似
const fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);
