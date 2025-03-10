// console.log(a); // Reference Error
console.log(b); // undefined
let a = 10;  //isme memory allocate ho rha hai lkin different memory space me toh iss wjh se refrence error aa rha hai 
var b = 30; // isme variable v global object ke saath attach hai islie undefined hai


//  there are three types of error
// 1. Reference Error
// 2. Type Error
// 3. Syntax Error
var c = 200;
{
  var c = 100;
  var d = 500;  
  console.log(c);
}
console.log(c);


let x = 100;
function bhu() {
    var x = 300;
    console.log(x);
}
console.log("x =",x);

bhu();