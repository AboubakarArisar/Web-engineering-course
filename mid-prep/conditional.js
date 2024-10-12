// JavaScript Conditionals
// 1. If Statement
console.log("1. If Statement");

let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

// 2. If-Else Statement
console.log("\n2. If-Else Statement");

let temperature = 25;

if (temperature > 30) {
  console.log("inside sukkur");
} else {
  console.log("outside sukkur");
}

// 3. If-Else If-Else Statement
console.log("\n3. If-Else If-Else Statement");

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// 4. Nested If Statements
console.log("\n4. Nested If Statements");

let num = 15;

if (num > 0) {
  console.log("Number is positive");
  if (num % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
} else {
  console.log("Number is negative");
}

// 5. Switch Statement
console.log("\n5. Switch Statement");

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("paper hai ");
    break;
  case "Friday":
    console.log("cn ka paper");
    break;
  case "Saturday":
  case "Sunday":
    console.log("chutti hai");
    break;
  default:
    console.log("kuch bh");
}

// 6. Ternary Operator
console.log("\n6. Ternary Operator");

let isPerparing = true;
let action = isPerparing ? "or parho" : "ho jae ga";
console.log(action);
