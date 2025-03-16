const person = { name: "Sweta", age: 24, city: "Pune" };

const personMap = new Map(Object.entries(person));
// object ko array me convert krta hai
console.log(personMap);
console.log(personMap.get('name'));


const entries = [
    ['name','Sweta'],
    ['age', 24],
    ['city', 'pune']
];
// array ko object me convert krta hai
const obj = Object.fromEntries(entries);
console.log(obj);

const obj1 = {name:"Sweta", age:24};
const obj2 = {city:"Pune", country: "India"};
// jb hme multiple object ko merge krna ho
const mergeObj = Object.assign({},obj1,obj2);
console.log("mergeObj",mergeObj)


const person1 = { name: "Sweta", age: 24 };

Object.freeze(person1);
person1.age = 30;  
console.log(person1);
console.log("Hello World");
