const person = {
    name: "Sweta",
    greet: function(age,val){
        console.log(`Hello my name is ${this.name} and I am ${age} years old ${val}`);
    }
}

const person2 = {name: "Kajal"};

console.log("Hello");
person.greet.call(person2, 25,45); 


function Parent(name, age) {
    this.name = name;
    this.age = age;
}


Parent.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
};

function Child(name, age, hobby) {
    Parent.call(this, name, age);
    this.hobby = hobby;
}


Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child1 = new Child("Ravi", 10, "Football");

console.log(child1.name);  
console.log(child1.age);   
console.log(child1.hobby); 
console.log(child1.greet()); 

