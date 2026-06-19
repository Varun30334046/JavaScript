const student = {
    name: "Varun",
    rollNo: "101",
    course: "Java Full Stack"
};

let html = 85;
let css = 90;
let javascript = 88;
let react = 92;
let git = 80;

let total = html + css + javascript + react + git;
let percentage = total / 5;

let result = percentage >= 35 ? "Pass" : "Fail";

let subjects = ["HTML", "CSS", "JavaScript", "React", "Git"];

let studentName = prompt("Enter Student Name:");

confirm("Do you want to view the report card?")
    ? alert("Welcome " + studentName)
    : alert("Thank You");

console.log("==============================");
console.log("      STUDENT REPORT CARD");
console.log("==============================");
console.log("Student Name : " + student.name);
console.log("Roll Number  : " + student.rollNo);
console.log("Course       : " + student.course);
console.log("Subjects     : " + subjects.join(", "));
console.log("HTML         : " + html);
console.log("CSS          : " + css);
console.log("JavaScript   : " + javascript);
console.log("React        : " + react);
console.log("Git          : " + git);
console.log("Total Marks  : " + total);
console.log("Percentage   : " + percentage + "%");
console.log("Result       : " + result);
console.log("==============================");