//由于HTTP请求中GET请求是最常见的一种，并且不需要请求体，因此http模块也提供了以下便捷API。
//http.get('http://www.example.com/', function (response) {});

/* 在回调函数中，除了可以使用response对象访问响应头数据外，
还能把response对象当作一个只读数据流来访问响应体数据。 */

const http = require('http');
http.get('http://www.example.com/', function (response) {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        //chunk是一个buffer数据块,每次读取到一点，就把他放进数组里面，最后再concat组合
        body.push(chunk);
    });

    response.on('end', function () {
        //组合buffer数据块
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});