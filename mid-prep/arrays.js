//Javascript Arrays

let fruits = ["apple", "banana", "orange"];

// 1. Accessing Elements
console.log("\n1. Accessing Elements");
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange

// 2. Accessing using negative index
console.log("\n2. Accessing using negative index");
console.log(fruits[-1]); // Output: undefined
console.log(fruits[-2]); // Output: undefined
console.log(fruits[-3]); // Output: undefined

// 3. Accessing all elements
console.log("\n3. Accessing all elements");
for (let fruit of fruits) {
  console.log(fruit);
}

// 4. Adding elements
console.log("\n4. Adding elements");
fruits.push("mango");
console.log(fruits); // Output: ["apple", "banana", "orange", "mango"]

// 5. Removing elements
console.log("\n5. Removing elements");
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange"]

// 6. Updating elements
console.log("\n6. Updating elements");
fruits[1] = "kiwi";
console.log(fruits); // Output: ["apple", "kiwi", "orange"]
