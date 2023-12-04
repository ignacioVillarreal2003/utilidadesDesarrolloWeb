"use strict";
// GENERICS
// Generics allow the creation of reusable components that
// can work with different types. They provide a way to
// define placeholders for types, allowing flexibility and
// type safety in various scenarios.
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() { return this.value; }
    ;
}
const numberBox = new Box(42);
console.log(numberBox.getValue());
const stringrBox = new Box('I said hop in...🔫 🛩');
console.log(stringrBox.getValue());
// In the example, the Box class uses a generic type parameter T,
// allowing the box to hold values of different types.
// The type is specified when creating an instance of the class,
// providing type safety and flexibility.
