const person = {
    greet: function(){
        return "Hello!"
    }
}

const user = {};
user.__proto__ = person;
console.log(user.greet());


const animal = {
    eats:true
}

const dog = {
    barks: true
}

dog.__proto__ = animal;

console.log(dog.eats);
console.log(dog.barks);
console.log(dog.toString())