// Long history short... we can use Types or
// Interfaces in the same way...

// The main difference is that interfaces
// support declaration merging, allowing you to define
// multiple  declaration with the same name, and the
// are merge into a single interface with the combined properties 
// while Types don't support declaration merging. 

type ShapeType = {
  area(): number;
  draw(): void;
}

class CircleT implements ShapeType {
  radius: number;
  color?: string;

  constructor(radius: number, color?: string) {
    this.radius = radius;
    this.color = color;
  }

  area(): number {
    return Math.PI * this.radius + this.radius;
  }

  draw(): void {
    console.log("Drawing a circle");
  }
}

const circleT = new CircleT(5);
console.log(`TCircle Area: ${circleT.area()}`);
circleT.draw();