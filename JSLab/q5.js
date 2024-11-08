function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}
function isPrime(num) {
  if (num > 0) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function numberFact(num, callback) {
  return callback(num);
}

console.log(numberFact(59, isOdd));
