const user = {
    name: "Sweta",
    sayHello: function(){
        console.log(`Hello ${this.name}`)
    }
}
user.sayHello()
setTimeout(user.sayHello, 2000);
setTimeout(user.sayHello.bind(user),1000);



function multiply(a,b) {
    return a*b;
}

const double = multiply.bind(null,2);
console.log(double(5));
console.log(double(10));


function applyDiscount(price,discount) {
    return price-(price*discount)/100;
}

const applyDiscount = applyDiscount.bind(null,50);
console.log(applyDiscount(10));
console.log(applyDiscount(20));