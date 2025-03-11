// Array methods
let arr = [10,20,30,40,50,60,10,10,30,80];
console.log(arr.at(1));
console.log(arr.at(0));
console.log(arr.indexOf(30));
console.log(arr.indexOf(40));
console.log(arr.lastIndexOf(10));
console.log(arr.includes(80));
console.log(arr.includes(100));

// adding or removing elements
let arr1 = [1,2,7,3,4];
arr1.push(5);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.unshift(10);
console.log(arr1);
arr1.shift();
console.log(arr1);

// splice(startIndex,deleteCount,newItems...)
let arr3 = [10,20,30,40,50,60];
arr3.splice(2,1);
console.log(arr3);
arr3.splice(2,0,15,34);
console.log(arr3);

// Non-Mutating Methods
let arr2 = [11,12,13,14,15,16];
console.log(arr2.slice(1,4));
console.log(arr2.slice(-3,-1));

let a = [2,3,4];
let b = [1,6,7];
console.log(a.concat(b));

// searching and filtering elements
let c = [10,20,30,40,50];
let result = c.find(num => num === 30);
console.log(result);
// it will return first matching element index
console.log(c.findIndex(num => num > 25));

let filtered = c.filter(num => num > 30);
console.log(filtered);
// if any element satisfy
console.log(c.some(num => num > 35));
// if all element satisfy then it will return true
console.log(arr.every(num => num > 15));

// Transforming element
let newArr = c.map(num => num *2);
console.log(newArr);

let sum = c.reduce((acc,num) => acc+num, 0);
console.log("sum",sum);

let nums = [40,100,1,5];
nums.sort((a,b) => a-b);
console.log(nums);

let arr5 = [1,2,3];
console.log(arr5.reverse());

// forEach
let str = ["Apple","Banana","Mango"];
str.forEach((value,index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

let obj = {name:"Sweta", age:25, city: "Pune"};
for(let key in obj){
    console.log(`Key: ${key}, value: ${obj[key]}`);
}

