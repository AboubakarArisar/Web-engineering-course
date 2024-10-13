// JavaScript Functions
// 1. Function Declaration
console.log("\n1. Function Declaration");
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Bud"));

// 2. Function Expression
console.log("\n2. Function Expression");
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 3));

// 3. Arrow Function
console.log("\n3. Arrow Function");
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

// 4. Self-Invoking Function

(function () {
  console.log("I am a Self-Invoking Function");
})();

let a = function () {
  return 3;
};

let ab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(ab);
