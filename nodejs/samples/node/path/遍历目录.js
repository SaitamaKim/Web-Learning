const fs = require('fs'),
      path = require('path');

function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
};

travel("E:/jdbc",function(pathname){
    console.log(String(pathname).split('\\')[String(pathname).split('\\').length-1]);
})
