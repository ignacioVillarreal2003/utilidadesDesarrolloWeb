"use strict";
// Abstract Classes
// Abstract classes are classes that cannot be instantiated directly,
// serving as blueprints for other classes. They cancontain abstract methods
// that must be implemented inthe derived classes.
class Vehicle {
}
class Car extends Vehicle {
    move() {
        console.log('the car is moving...');
    }
}
const car = new Car();
car.move();
// const vehicle = new Vehicle(); 👈 ❌ We can't create a instance of an abstract class.
// Note:
// Both approaches allow the same things to be done.
// They are two different ways of solving a problem.
// A bigger difference in TypeScript is that (abstract) 
// classes are available at runtime, while interfaces are
// compile time only.
