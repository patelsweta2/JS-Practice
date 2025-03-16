const person = {
    firstName: "Sweta",
    lastName: "Patel",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());

// arrow function ka this Object ke bjae global scope me refer krta hai
const person1 = {
    firstName: "Sweta",
    lastName: "Sharma",
    fullName: () => {
      return `${this.firstName} ${this.lastName}`;
    }
  };
console.log(person1.fullName());

const person2 = {
    greet: function(){
        return "Hello";
    }
};
console.log(person2.greet());
const newPerson = Object.create(person2);
console.log(newPerson.greet());


const calculator = {
    add(a,b){
        return a + b;
    },
    subtract(a,b){
        return a-b;
    }
};
console.log(calculator.add(10,5));
console.log(calculator.subtract(10,5));


const persons = {
    name: "sweta",
    greet: function(){
        setTimeout(function() {
            console.log("Hello", this.name);
        }.bind(this), 1000);
    }
}

// persons.greet();
console.log(this);

const persone = {
    name: "Sweta Patel",
    greet: function(){
        console.log("this",this.name);
    }
}

persone.greet();


function show() {
    name = "Sweta Patel"
    console.log("thus",this.location.
        ancestorOrigins
        );
}
show();

const object1 = {
    name: "Swati Patil",
    greet: function () {
        console.log("Hello ", this.name);
    }.bind(this)
};

object1.greet(); 