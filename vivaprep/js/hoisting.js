//hoisting is a mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.

// Example 1
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// Example 2
// console.log(y); // ReferenceError: y is not defined
let y = 5;
console.log(y); // 5

// Example 3
// console.log(z); // ReferenceError: z is not defined
const z = 5;
console.log(z); // 5

// Example 4
var a = 5;

function foo() {
    console.log(a); // undefined
    var a = 10;
    console.log(a); // 10
}

foo();