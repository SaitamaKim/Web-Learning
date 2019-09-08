var http = require('http');
var url  = require('url')
http.createServer(function(request,response){
  
  var pathname = request.url;

  if(request.url=="/"){
    pathname = 'index.html';
  }
  console.log(request);
}).listen(8080)