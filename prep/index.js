//slice method

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice(0, 3));
//end index in exlusive

//splice method
let names = [1, 2, 4, 5, 5, 6];

console.log(names.splice(0, names.length));
console.log(names);

//anonyms function
let x = function () {
  console.log("Hello World");
};

x();

//arrow function

let y = () => "hello from arrow";

console.log(y());
