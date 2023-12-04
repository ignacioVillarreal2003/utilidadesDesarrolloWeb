"use strict";
// Interfaces define the structure and contract that a class must adhere to.
// They specify properties, method signatures,
// and ensure consistent implementation across multiple classes.
// A class can implement multiple interfaces but can't Inheritance 
// from multiple classes (It relies on the programming language).
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius + this.radius;
    }
    draw() {
        console.log("Drawing a circle");
    }
}
const circle = new Circle(5);
console.log(`Circle Area: ${circle.area()}`);
circle.draw();
class PrintableDocument {
    print() {
        console.log("Printing document...");
    }
}
const doc = new PrintableDocument();
doc.print();
