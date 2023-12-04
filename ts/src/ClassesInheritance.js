"use strict";
// Classes in TypeScript provide a way to define objects with properties and methods.
// Inheritance allows classes to inherit properties and methods from a parent class,
// enabling code reuse and creating class hierarchies.
// SuperClass, ParentClass
class Animal {
    // The constructor method allows the class to be instantiated
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal is making a sound...");
    }
}
// SubClass
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} is barking 🐶`);
    }
}
const dog = new Dog("Pichicho");
dog.makeSound();
