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
const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object:", parsedStudent);
const { name, courses } = student;
console.log("Name:", name);
console.log("Courses:", courses);
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);
const clonedStudent = { ...student, graduationYear: 2026 };
console.log("Cloned Student:", clonedStudent);
const newCourses = ["Art", "Philosophy"];
const allCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", allCourses);
student.addCourse = function(course) {
  this.courses.push(course);
};

student.addCourse("Programming");
console.log("Updated Courses:", student.courses);
