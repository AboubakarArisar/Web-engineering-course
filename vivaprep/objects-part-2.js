//other way of creaiting objects
const obj = new Object();

obj._id = "abc567";
obj.isLoggedIn = false;

console.log(obj);

//objects within objects

const obj2 = {
  _id: "abc567",
  isLoggedIn: false,
  user: {
    name: "username",
    age: 20,
  },
};

console.log(obj2.user.name);

//merging 2 or more objects in one

const oj1 = { 1: "one", 2: "two" };
const oj2 = { 3: "three", 4: "four" };

//way 1
const oj3 = Object.assign(oj1, oj2); // assign method puts the values of all paramater in first target object and returns the target object

console.log(oj3);
console.log(oj1);
//both are same

//way 2

const oj4 = Object.assign({}, oj1, oj2); // this will not change the values of oj1

// way 3
const oj5 = { ...oj1, ...oj2 }; // spread operator
console.log(oj5);

//getting the keys of an object

const keys = Object.keys(oj5);

console.log(keys);

//getting the values of an object

const values = Object.values(oj5);

console.log(values);
