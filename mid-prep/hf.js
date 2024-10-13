const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newarray = numbers.map((number) => {
//   return number * number;
// });

function square(num) {
  return num * num;
}

const newarray = numbers.map(square);

console.log(newarray);

function getEven(num) {
  return num % 2 == 0;
}

let evenNumbers = numbers.filter(getEven);

console.log(evenNumbers);
