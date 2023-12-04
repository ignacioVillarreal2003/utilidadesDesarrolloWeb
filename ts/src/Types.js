"use strict";
// Long history short... we can use Types or
// Interfaces in the same way...
class CircleT {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    area() {
        return Math.PI * this.radius + this.radius;
    }
    draw() {
        console.log("Drawing a circle");
    }
    login() {
        console.log('here...');
    }
}
const circleT = new CircleT(5);
console.log(`TCircle Area: ${circleT.area()}`);
circleT.draw();
circleT.login();
