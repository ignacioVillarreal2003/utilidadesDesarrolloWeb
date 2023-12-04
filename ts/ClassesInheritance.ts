// Classes in TypeScript provide a way to define objects with properties and methods.
// Inheritance allows classes to inherit properties and methods from a parent class,
// enabling code reuse and creating class hierarchies.

// SuperClass, ParentClass
class Animal {
  name: string;

  // The constructor method allows the class to be instantiated
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Animal is making a sound...")
  }
}

// SubClass
class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} is barking 🐶`)
  }
}

const dog = new Dog("Pichicho");
dog.makeSound();