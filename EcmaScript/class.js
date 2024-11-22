class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.variable = 45;
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }

  static count = 55;
  getCount() {
    Student.count = 56;
    return Student.count;
  }
}

let student = new Student("saif", 22);

console.log(student.getName());
console.log(student.getAge());
console.log(student.getCount());
