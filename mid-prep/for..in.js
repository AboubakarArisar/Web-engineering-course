//Javascript for...in loop

//often used to loop through the properties of an object

console.log("\n1. For...in Loop");
const Class = { name: "Section-E", strength: 45, semester: "5th" };
for (const key in Class) {
  console.log(`${key}: ${Class[key]}`);
}
