const url = require('url')


//字符串 => url对象
var u = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

console.log(u);

//url对象  =>  url字符串
var str = url.format({
        protocol: 'http:',
        host: 'www.example.com',
        pathname: '/p/a/t/h',
        search: 'query=string'
    });
console.log(str);


//resolve可以用来拼接url
var str2 = url.resolve('http://www.example.com/foo/bar', '../baz');
console.log(str2);