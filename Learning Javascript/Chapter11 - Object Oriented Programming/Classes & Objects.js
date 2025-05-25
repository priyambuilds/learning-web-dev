// Object Oriented Programming is a way of writing code that is more organized and easier to understand. It is based on the concept of objects, which are instances of classes. 

// Prototype:
// Javascript has a prototype-based object-oriented system. This means that objects can inherit properties and methods from other objects. This is done through the prototype chain.

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true
// But Prototypes are not enough for OOP because they are not flexible and can lead to confusion. So, we use classes.

// Classes:
// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
class Animal{
    Constructor(name){
        this.name = name // this is a reference to the object that is being created
        console.log("Object is created...")
    }
    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon")
    }
}

class Lion extends Animal{
    Constructor(name){
        super(name) // super is used to call the constructor of the parent class
        console.log("Object is created and he is a lion...")
    }
    eats(){
        super.eats() // super is used to call the method of the parent class
        console.log("Kha raha hoon and I am a lion")
    }
}

let a = new Animal("Bunny"); // Object is created...
a.eats(); // Kha raha hoon
a.jumps(); // Kood raha hoon

let l  = new Lion("Shera")
console.log(l) // Lion { name: 'Shera' }
l.eats() // Kha raha hoon and I am a lion

// Static Methods:
// Static methods are called on the class itself, not on instances of the class. They are often used to create utility functions for an application.
// Getters and Setters:
// Getters and setters are special methods that provide access to an object's properties. They are used to define computed properties, or to perform additional logic when getting or setting a property.
