let time = 0;
let timer = setInterval(function(){
    console.log("来了老弟" + time++);
    if(time>2){
        clearInterval(timer);
    }
},1500);