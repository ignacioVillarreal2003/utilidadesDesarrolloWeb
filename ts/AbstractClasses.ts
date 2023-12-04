// Abstract Classes
// Abstract classes are classes that cannot be instantiated directly,
// serving as blueprints for other classes. They can contain abstract methods
// that must be implemented in the derived classes.

abstract class Vehicle {
  abstract move(): void;
}

class Car extends Vehicle {
  move(): void {
    console.log('the car 🚗 is moving...')
  }
}

class Plane extends Vehicle {
  move(): void {
    console.log('the plane 🛫 is flying...')
  }
}

const car = new Car();
car.move();

const plane = new Plane();
plane.move();

// const vehicle = new Vehicle(); 👈 ❌ We can't create a instance of an abstract class.


// Note:
// Both approaches allow the same things to be done.
// They are two different ways of solving a problem.
// A bigger difference in TypeScript is that (abstract) 
// classes are available at runtime, while interfaces are
// compile time only.