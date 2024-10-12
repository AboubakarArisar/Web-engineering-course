// JavaScript Data Types
// 1. String
// Strings are used for storing and manipulating text
let greeting = "Hello, World!";
let name = "Java Script";
let message = `Welcome, ${name}!`; // Template literal, allows embedding expressions

console.log("1. String examples:");
console.log(greeting);
console.log(name);
console.log(message);

// 2. Number
// Numbers can be integers or floating-point
let age = 30; // Integer
let price = 19.99; // Floating-point
let negativeNumber = -5;

console.log("2. Number examples:");
console.log(age);
console.log(price);
console.log(negativeNumber);

// 3. BigInt
// BigInt is used for integers too large to be represented by the Number type
let hugeNumber = 1234567890123456789012345n; // Note the n at the end without n it's type will be number

console.log("3. BigInt example:");
console.log(hugeNumber);

// 4. Boolean
// Booleans represent true or false values
let isPerparing = true;
let isSleeping = false;

console.log("4. Boolean examples:");
console.log(isPerparing);
console.log(isSleeping);

// 5. Undefined
// A variable that has been declared but not assigned a value is undefined
let undefinedVariable;

console.log("5. Undefined example:");
console.log(undefinedVariable);

// 6. Null
// Null represents a non-value or absence of any object value
let emptyValue = null;

console.log("6. Null example:");
console.log(emptyValue);

// 7. Object
// Objects are used to store collections of data and more complex entities
let person = {
  name: "Student",
  age: 20,
  isStudent: true,
};

let courses = [
  "Web-Engineering",
  "Computer Networking",
  "Probability and Statistics",
];
//array is also an object

console.log("8. Object examples:");
console.log(person);
console.log(courses);

// Bonus: Checking types
console.log("Checking types:");
console.log(typeof greeting); // "string"
console.log(typeof age); // "number"
console.log(typeof hugeNumber); // "bigint"
console.log(typeof isPerparing); // "boolean"
console.log(typeof undefinedVariable); // "undefined"
console.log(typeof emptyValue); // "object" (this is a known quirk in JavaScript) null is an object , this is said to be a bug in js
console.log(typeof person); // "object"
console.log(typeof courses); // "object"
