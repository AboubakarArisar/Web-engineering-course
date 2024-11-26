let obj = {
  name: "aboubakar",
  semester: 5,
  department: "CS",
  details() {
    return this;
  },
};

let refrence = obj.details();

refrence.name = "ali";
let name = refrence.name;
console.log(name);
console.log(obj);
