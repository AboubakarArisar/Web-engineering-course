//objects are containers for properties and methods aas values are in key and value pair
const userObj = {
  name: "Aboubakar",
  age: 20,
  semester: 5,
  isStudent: true,
  lastLoggedIn: ["saturday", "sunday"],
};

//accessing object properties

console.log(userObj.name);

//second method of accessing properties

console.log(userObj["age"]);

//adding new properties to an object

userObj["email"] = "aboubakar@gmail.com";

console.log(userObj);

//deleting properties from an object

delete userObj.age;

console.log(userObj);

//updating properties in an object

userObj.name = "Aboubakar Arisar";

console.log(userObj);
