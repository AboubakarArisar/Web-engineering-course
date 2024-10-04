function checkMinimun(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}
function checkMinimunOccurences(numbers) {
  let min = checkMinimun(numbers);
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === min) {
      count++;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === min) {
      numbers[i] = -1;
    }
  }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

checkMinimunOccurences(numbers);

console.log(numbers);
