//Javascript High Order Functions

//High Order Functions: Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

//1. Functions as Arguments

//Example 1: Passing a function as an argument and returning it from another function
function greet() {
  return "Hello!";
}

function callFunction(func) {
  return func();
}

console.log(callFunction(greet)); // Output: Hello!

//Example 2: Using higher-order functions with map()

//map function is used to apply a given function to each element of an array and returns a new array.

const numbers = [1, 2, 3, 4, 5];
const square = (num) => num * num;

//Syntax of map()

//array.map(function(currentValue, index, arr), thisValue)

const squaredNumbers = numbers.map(square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const students = [
  { name: "hassan", dep: "cs", city: "bhiria" },
  { name: "saifullah", dep: "cs", city: "mirpur" },
  { name: "zohaib", dep: "cs", city: "gambat" },
  { name: "abdullah", dep: "cs", city: "tando adam" },
  { name: "kashif", dep: "bba", city: "sukkur" },
  { name: "raja", dep: "af", city: "sukkur" },
];

const studentName = students.map((student) => student.name);

//Filter Function

//filter function is used to filter out the elements from an array based on a condition.

//Syntax of filter()

//array.filter(function(currentValue, index, arr), thisValue)

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const csStudents = students.filter((student) => student.dep === "cs");
console.log(csStudents);
