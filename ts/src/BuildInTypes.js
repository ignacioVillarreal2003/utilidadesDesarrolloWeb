"use strict";
// PRIMITIVE TS data types
// Commontly used
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
const arr = [1, 2, 3];
// const arr: Array<number> = [1, 2, '3'] // 👈 ❌ We can't put a string because is defined as Array<number>
console.log(arr);
// Objects & Classes
// Without implementing classes
const user = {
    name: 'pepe',
    age: 21
};
console.log('user: ', user);
// Implementing Classes
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 56);
console.log(newVPoint);
// Union Types
// Combine multiple types allowing a variable to
// have different possible types
function print(value) {
    console.log('Printing string or number: ', value);
}
print('printing string');
print(44552211);
//SPECIAL TYPES
// type: UNKNOW
const value = "Hello";
let lengthNum;
if (typeof value === "string") {
    lengthNum = value.length;
}
else {
    lengthNum = 0;
}
console.log('lengthNum: ', lengthNum);
// type: ANY. WildCard or JS by default Behaviour
function printAny(value) {
    console.log('Printing string or number: ', value);
}
printAny('printing ANYthing...');
// type: NEVER
function throwError() {
    throw new Error('Bomb error 💣');
}
try {
    throwError(); // Function that throws an error
    // error and never returns.
}
catch (error) {
    console.log('Err: ', error);
}
// type: VOID
function logMessage(message) {
    console.log(message);
}
;
logMessage('Printing a message 🥔');
// Casting
let numberA = 4;
// console.log((numberA as string)); // 👈 ❌  That will fail, need first be casted to unknown
let numberB = 4;
console.log(numberB);
let anyArray = [1, 2, '🥑', [1, 2], { name: 'pedro' }];
anyArray.forEach((e) => {
    console.log('forEach: ', e);
});
