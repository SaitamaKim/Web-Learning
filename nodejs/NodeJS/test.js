process.nextTick(function () {
    console.log('2rd roll callback!');
    process.nextTick(function(){
        console.log("3rd roll callback");
    })
});
console.log('nextTick was set!');
//判断运行环境
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}

process.on('exit',function(code){
    console.log("exit"+code);
})