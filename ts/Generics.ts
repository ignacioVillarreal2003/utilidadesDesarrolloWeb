// GENERICS
// Generics allow the creation of reusable components that
// can work with different types. They provide a way to
// define placeholders for types, allowing flexibility and
// type safety in various scenarios.

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T { return this.value };
}

const numberBox = new Box<number>(42);
console.log(numberBox.getValue())

const stringBox = new Box<string>('I said hop in...🔫 🛩');
console.log(stringBox.getValue())


// In the example, the Box class uses a generic type parameter T,
// allowing the box to hold values of different types.
// The type is specified when creating an instance of the class,
// providing type safety and flexibility.
