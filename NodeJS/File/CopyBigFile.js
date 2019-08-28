var fs = require('fs');


function copy(src, dst) {
    //异步方法
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2)); 