let obj = {
  name: "student",
  age: 22,
  marks: {
    pf: 22,
    ps: 21,
    ca: 25,
  },
};

let array = [obj.marks];
//for adding dynamically any property to the object
obj.marks[`cp`] = 23;

console.log(obj.marks);

let students = [
  { name: "Aboubakar", age: 22 },
  { name: "Hassan", age: 24 },
  { name: "Zohaib", age: 25 },
];

// Using reduce to convert array of objects to an object
let studentsObj = students.reduce((acc, student) => {
  acc[student.name] = student.age;
  return acc;
}, {});

console.log(studentsObj);

//map question

let nums = [1, 2, 3, 4, 5];
let numbers = nums.map((num) => {
  if (num % 2 == 0) return num * 2;
  else return;
});

console.log(numbers);
