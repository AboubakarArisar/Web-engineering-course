function printStringProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

const sample = {
  Name: "Aboubakar",
  Age: 22,
  City: "Sukkur",
  isStudent: true,
};

printStringProperties(sample);
