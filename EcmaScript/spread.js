let numbers = [10, 11, 12, 13, 14, 15];

let currNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...numbers];

console.log(currNum);

function sum(a, b, ...args) {
  let sum = a + b;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log(sum(1, 2, 3));
