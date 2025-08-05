const student = {
  name: "Amina",
  age: 20,
  enrolled: true,
  courses: ["Math", "Science", "History"],
  getInfo() {
    return `${this.name} is ${this.age} years old.`;
  },
};

console.log(student.name, student.age);
console.log(student.getInfo());
