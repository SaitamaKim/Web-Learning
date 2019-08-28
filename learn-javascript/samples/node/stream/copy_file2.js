var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

//处理写入速度如果跟不上读入速度的方式

rs.on('data', function (chunk) {
    //如果传入的值是放在缓存里面了 那么返回false  此时先把读取流暂停
    if (ws.write(chunk) === false) {
        rs.pause();
    }
});

rs.on('end', function () {
    ws.end();
});

//如果只写数据流已经将缓存中的数据写入目标，则继续
ws.on('drain', function () {
    rs.resume();
});