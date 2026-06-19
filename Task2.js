const Name="Varun";
const ID="EMP101";
let Department="Development";
let Salary=50000;
const Permanent=true;

console.log("Employee Details");
console.log("---------------");

console.log("Name       : " + Name);
console.log("ID         : " + ID);
console.log("Department : " + Department);
console.log("Salary     : " + Salary);
console.log("Permanent  :" + Permanent);

let Skills=["HTML", "CSS", "JavaScript", "React" , "Git","Node.js"];
console.log(Skills[0]);
console.log(Skills[2]);
console.log(Skills[Skills.length-1]);
console.log(Skills.length);

const company = {
    companyName: "Stackly",
    location: "Hyderabad",
    employees: 100,
    technologies: ["Java Full Stack", "Python Full Stack" , "Data Science","Data Analysis"],
}

console.log("Company name: " + company.companyName);
console.log("Location: " + company.location);
console.log("Number of Employees: " + company.employees);
console.log("Technologies: " + company.technologies.join(", "));

let basicSalary = 30000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.1;
let FinalSalary = basicSalary - tax;
console.log("Total Salary : " + totalSalary);
console.log("Final Salary : " + FinalSalary);

let attendence = 92;
let result = attendence >= 75 ? "Eligible for Exam" : "Not Eligibile";
console.log(result);

let username = "admin";
let password = "12345";

console.log(username === "admin" && password === "12345" ? "Login Successful" : "Invalid Credentials");

const Store = {
    ProductName: "Laptop",
    ProductPrice: 45000,
    Quantity: 2
}
    
let totalBill = Store.ProductPrice * Store.Quantity;

console.log("Product : " + Store.ProductName);
console.log("Price : " + Store.ProductPrice);
console.log("Quantity : " + Store.Quantity);
console.log("Total : " + totalBill);

let visitors = 100;

console.log(++visitors); // Pre Increment: visitors becomes 101, then prints 101

console.log(visitors++); // Post Increment: prints 101, then visitors becomes 102

console.log(--visitors); // Pre Decrement: visitors becomes 101, then prints 101

console.log(visitors--); // Post Decrement: prints 101, then visitors becomes 100



console.log(10 == "10");     // true

console.log(10 === "10");    // false

console.log(20 != "20");     // false

console.log(20 !== "20");    // true

console.log(5 < 10);         // true 

console.log(15 >= 20);       // false

console.log(100 <= 100);     // true 



let employeeName = prompt("Enter Employee Name:");
let employeeAge = prompt("Enter Employee Age:");

confirm("Do you want to join our company?") ? alert("Welcome " + employeeName) : alert("Thank You");


const employee = {
    name: "Varun",
    id: "EMP101",
    department: "Development",
    experience: 3
};

const companyInfo = {
    companyName: "Stackly IT",
    location: "Hyderabad"
}

let empSalary = 50000;
let empBonus = 5000;
let finalSalary = empSalary + empBonus;

let attendance = 92;
let examStatus = attendance >= 75 ? "Eligible" : "Not Eligible";

let loginStatus = username === "admin" && password === "12345" ? "Success" : "Failed";

console.log("==============================");
console.log("      EMPLOYEE PORTAL");
console.log("==============================");
console.log("Employee Name : " + employee.name);
console.log("Employee ID   : " + employee.id);
console.log("Department    : " + employee.department);
console.log("Experience    : " + employee.experience + " Years");
console.log("Salary        : ₹"  + empSalary);
console.log("Bonus         : ₹" + empBonus);
console.log("Final Salary  : ₹" + finalSalary);
console.log("Skills        : " + Skills.join(", "));
console.log("Attendance    : " + attendance + "%");
console.log("Exam Status   : " + examStatus);
console.log("Login Status  : " + loginStatus);
console.log("Company       : " + companyInfo.companyName);
console.log("Location      : " + companyInfo.location);
console.log("==============================");

// Hii Naveen,
// I have completed the Bonus Task as well.
// It has been uploaded to this GitHub repository.
// Kindly review the Bonus Task too.
// Thank you.

