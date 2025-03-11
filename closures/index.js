function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3


function timer(){
    for(var i = 1;i<=5;i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
}

timer();

// output -> 6,6,6,6,6

function timer1(){
    for(let i = 1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
timer1();

// using IIFE
function timer3(){
    for(var i = 1;i<=5;i++){
        (function(i){
            setTimeOut(function(){
                console.log(i);
            },i*1000)
        })(i);
    }
}
timer3();


