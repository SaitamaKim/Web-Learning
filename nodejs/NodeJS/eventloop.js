

// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();
 
// // 创建事件处理程序
// var connectHandler = function() {
//    console.log('连接成功。');
  
//    // 触发 data_received 事件 
//    eventEmitter.emit('data_received');
// }
 
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);
 
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });
 
// // 触发 connection 事件 
// eventEmitter.emit('connection');
 
// console.log("程序执行完毕。");


// const events = require('events');

// var eventEmitter = new events.EventEmitter();

// eventEmitter.on('召见出现',function(){console.log("鸭呼！！！");});

// console.log("等待召见被触发");

// eventEmitter.emit('召见出现');

// const fs = require("fs");

// var readStream = fs.createReadStream('file.txt');

// readStream.setEncoding('utf8');

// var data = ''

// readStream.on('data',function(chunk){
//     console.log('data事件');
//     data+= chunk;
// })

// readStream.on('end',function(err){
//   console.log(err);
// })

// readStream.on('end',function(){
//   console.log(data);
// })

// const fs = require('fs');

// const writeStream  = fs.createWriteStream('file.txt');


// var data = '召见吊牛逼';

// writeStream.write(data,'utf8');

// writeStream.end();

// writeStream.on('finish',function(){
//   console.log('文件写入结束');
// })

// writeStream.on('error',function(err){
//   console.log(err);
// })

var fs = require("fs");
var zlib = require('zlib');

// // 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('file.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('file.txt.gz'));
  
// console.log("文件压缩完成。");

// 解压 input.txt.gz 文件为 input.txt
var fun = fs.createReadStream('file.txt.gz')
  .pipe(zlib.createGunzip());
  
console.log(fun);


