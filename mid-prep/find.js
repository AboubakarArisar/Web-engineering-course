let ages = [12, 11, 10, 13, 22];

function age(nm) {
  return nm >= 18;
}

let adults = ages.find(age);

console.log(adults);
