let obj = {
    toString(){
        return "Custom toString method";
    }
}
console.log(obj.toString()); // Custom toString method

let obj1 = {name: "Sweta"}
console.log(obj1.toString()); // [object object]

Object.prototype.greet = function() {
    return "Hello";
};
let obj2 = {};
let obj3 = {};
console.log(obj1.greet());
console.log(obj2.greet());

let obj4 = {
    greet(){
        return "Hi, I am Sweta"
    }
}

console.log(Object.getPrototypeOf(Object.prototype));
console.log(obj4.greet());  // ye Object ko override kr dia

Object.prototype.valueOf = function(){
    return "Hacked!";
}

console.log((10).valueOf());
console.log(("Hello").valueOf());


console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.prototype);

console.log(Object.getPrototypeOf(obj4))
console.log(Object.getPrototypeOf(Function.prototype))

// Prototype Chain -> object->Function.prototype->Object.prototype->null

console.log(typeof Object); // function
console.log(Object.getPrototypeOf(Object)) // Function.prototype
//because Object.prototype is not a function it is a pure object
console.log(Object.prototype(Object.prototype)) // null 


const objectss = {
    a: 1,
    b: [2,3,4, {c: [5,6, {d:8}]}],
    c:[5,6]
}

const sumNumbers = (data) => {
    let sum = 0;
    if(typeof data === "number"){
        return data;
    }
    if(Array.isArray(data)){
        for(let item of data){
            sum+=sumNumbers(item);
        }
    }
    if(typeof data === "object" && data !== null){
        for(let key in data){
            sum+=sumNumbers(data[key]);
        }
    }
    return sum;
}
console.log(sumNumbers(obj));