var buf = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log(buf[0])
console.log(buf.length)
console.log(buf.toString('utf-8'))
console.log(Buffer.from('hello','utf-8'))
//buffer不是只读的，更像是指针操作的c语言数组
buf[0] = 0x65;


//buffer的复制需要重新建一个Buffer对象，类似于先申请一个内存空间
var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
var dup = new Buffer(bin.length);

bin.copy(dup);
dup[0] = 0x48;
console.log(bin); // => <Buffer 68 65 6c 6c 6f>
console.log(dup); // => <Buffer 48 65 65 6c 6f>

//总之，Buffer将JS的数据处理能力从字符串扩展到了任意二进制数据。