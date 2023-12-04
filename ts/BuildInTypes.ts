// PRIMITIVE TS data types

// Commonly used
const happyString = 'happy 😃';
const happyNumber = 3;
const happyBoolean = true;
const nullo = null;
const undefinedThing = undefined;

//Not frequently symbol, bigint
//const bInt = Bigint(1000000000000000);
//const id: symbol = Symbol("uniqueId");

// COMPLEX data types

// Array
const arr: Array<number> = [1, 2, 3]
// const arr: Array<number> = [1, 2, '3'] // 👈 ❌ We can't put a string because is defined as Array<number>

console.log(arr);


// Objects & Classes

// Without implementing classes
const user = {
  name: 'pepe',
  age: 21
}

console.log('user: ', user);

// Implementing Classes
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
console.log(newVPoint);

// Function type
function sumar(numA: number, numB: number): void {
  console.log(numA + numB)
}

// Union Types
// Combine multiple types allowing a variable to
// have different possible types

function print(value: string | number) {
  console.log('Printing string or number: ', value);
}
print('printing string');
print(44552211);

//SPECIAL TYPES

// type: UNKNOWN
const value: unknown = "Hello";
let lengthNum: number;
if (typeof value === "string") {
  lengthNum = value.length;
} else {
  lengthNum = 0
}
console.log('lengthNum: ', lengthNum);

// type: ANY. WildCard or JS by default Behavior
function printAny(value: any) {
  console.log('Printing string or number: ', value);
}
printAny('printing ANYthing...');

// type: NEVER
function throwError(): never {
  throw new Error('Bomb error 💣')
}

try {
  throwError(); // Function that throws an error
  // error and never returns.
} catch (error) {
  console.log('Err: ', error);
}

// type: VOID
function logMessage(message: string): void {
  console.log(message);
};
logMessage('Printing a message 🥔');

// Casting

let numberA: number = 4;
// console.log((numberA as string)); // 👈 ❌  That will fail, need first be casted to unknown

let numberB: number = 4;
console.log((numberB as unknown as string));

let anyArray = [1, 2, '🥑', [1, 2], { name: 'pedro' }]
anyArray.forEach((e: any) => {
  console.log('forEach: ', e);
})