function objectPrinter(obj) {
  if (obj.size === 0) {
    return "Object is empty";
  }
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

const sample = {
  Name: "Aboubakar",
  Age: 22,
  City: "Sukkur",
  isStudent: true,
  Semester: 5,
  Department: "Computer Science",
};
const samplee = {};

objectPrinter(samplee);
