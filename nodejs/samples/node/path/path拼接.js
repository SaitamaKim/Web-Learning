const path = require('path');
var p = path.join('/ruguo/ai/','/wo/');
console.log(p);


//resolve参数 如果写E:(盘符开头)或者/开头的   是绝对路径  解析出来的就是写进去的绝对路径
//如果写相对路径，则相对于当前目录做拼接
//resolve完成后的path最后都不带/
var p2 = path.resolve('/a/t');
console.log(p2);