'use strict';

/* 
我们可以设定一个目录，然后让Web程序变成一个文件服务器。
要实现这一点，我们只需要解析request.url中的路径
，然后在本地找到对应的文件，把文件内容发送出去就可以了。
*/

//同时声明模块
var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录
// node file_server.js E://Game//
//argv[2]对应第三个词E://Game//
//resolve方法生成的绝对路径会把最后的斜杠去掉
var root = path.resolve(process.argv[2] || '.');
//当前目录
//var root = path.resolve();

console.log('Static root dir: ' + root);

// 创建服务器:
var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    //其实这一步完全不用做，因为request.url和经过这样处理之后的pathname一样
    var  pathname = url.parse(request.url).pathname; // '/css/bootstrap.css'
    //解码 经编码后的中文会乱码 在文件中找不到
    pathname = decodeURI(pathname);
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    //用join方法连接绝对路径和相对路径，在中间会自动加上一个斜杠
    var  filepath = path.join(root, pathname); // '/srv/www/static/bootstrap.css'
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            console.log('200 ' + decodeURI(request.url));
            response.writeHead(200);
            //没有必要手动读取文件内容。由于response对象本身是一个Writable Stream，
            //直接用pipe()方法就实现了自动读取文件内容并输出到HTTP响应。
            fs.createReadStream(filepath).pipe(response);
        } else if(!err && stats.isDirectory()) {
            console.log("u are requesting for directory\n we will search for replacable htmls");
            var replacableHTML = ['static/index.html','static/default.html'];
            replacableHTML.some(function(value,index,array){
                var tempPath = path.join(root,value);
                fs.stat(tempPath,function(err, stats){
                    if(!err && stats.isFile()){
                    //return true跳出整个循环，return false跳出本次循环 继续循环
                        response.writeHead(200);
                        fs.createReadStream(tempPath).pipe(response);
                        return true;
                    }
                    return false;
                })
            });

        }else{
            console.log('404 ' + decodeURI(request.url));
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);
// 开启服务器之后，下面的域名对应的就是工作文件所在目录，也就是所谓的网页根目录
//在HTML中需要获取的资源，都按照相对路径的格式写(但是不要获取网页根目录之外的资源)。这样可以自动解析为url
//HTML中例如src这类要获取别的服务器上的数据
//也可以直接写完整的url上去(http://www.baidu.com/static//haha.jpg)这样会自动去获取别的服务器上的数据

console.log('Server is running at http://127.0.0.1:8080/');
