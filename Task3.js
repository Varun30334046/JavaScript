// task 1

let EmployeeName = prompt("Enter Employee Name");
let EmployeeAge = prompt("Enter Employee Age");
let EmployeeDepartment = prompt("Enter Employee Department");
let EmployeeSalary = prompt("Enter Empolyee Salary");

const employee ={
    name: EmployeeName,
    age : EmployeeAge,
    department: EmployeeDepartment,
    salary:EmployeeSalary
}
console.log("Employee Details");
console.log("Name :",EmployeeName);
console.log("Age :",EmployeeAge);
comsole.log("Department :",EmployeeDepartment);
console.log("Salary :",EmployeeSalary);

if(employee.salary > 30000){
    console.log("Eligible For Bonus");
}
else{
    console.log("Not Eligible for Bonus");
}

// task 2

let ProductName = prompt("Enter the Product Name");
let ProductPrice = prompt("Enter the Product Price");
let ProductQuantity = prompt("Enter the Product Quantity");
let TotalBill = ProductPrice * ProductQuantity;
let FinalAmount;

if(TotalBill > 5000){
    let discount = TotalBill * 0.10;
    FinalAmount = TotalBill - discount;
}
else{
    FinalAmount = TotalBill;
}
console.log("Product Name :", ProductName);
console.log("Total Bill   :", TotalBill);
console.log("Final Amount :", FinalAmount);

 // Task 3

let StudentName = prompt("Enter the Student Name");
let StudentMarks = prompt("Enter the Student Marks");

if(StudentMarks >= 90){
    console.log("Grade A");
}
else if(StudentMarks >= 75){
    console.log("Grade B");
}
else if(StudentMarks >= 50){
    console.log("Grade C");
}
else if(StudentMarks < 50){
    console.log("Fail");
}
else{
    console.log("Invaild Marks");
}


// Task 4


let UserName = prompt("Enter User Name:");
let AccountBalance = Number(prompt("Enter Account Balance:"));
let WithdrawalAmount = Number(prompt("Enter Withdrawal Amount:"));

console.log("User Name:", UserName);

if (WithdrawalAmount <= AccountBalance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}


// Task 5

let username = "admin";
let password = "12345";

let EnteredUsername = prompt("Enter Username:");
let EnteredPassword = prompt("Enter Password:");

if (EnteredUsername === username && EnteredPassword === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

//Task 6

let array =["Biriyani","Pizza","Burger","Dosa","Fried Rice","Noodles","Sandwich","Ice Cream"];
console.log("First Item:",array[0]);
console.log("Last Item:", array[array.length - 1]);
console.log("Total Number of Item:", array.length);
console.log("Food Items:");
for (let item of array) {
    console.log(item);
}

// Task 7

let employee1 = {
    name: "Varun",
    age: 22,
    department: "CSE",
    salary: 35000,
    experience: "1 Years"
}

for (let key in employee1) {
    console.log(key + " : " + employee1[key]);
}

//Task 8

let SignalColor = prompt("Enter Signal Color:");

switch (SignalColor.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

// Task 9

let age = prompt("Enter your age:");

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}


// Task 10
let employeeName = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");

console.log("Welcome " + employeeName);

let status = attendance.toLowerCase() === "present"
    ? "Attendance: Present"
    : "Attendance: Absent";

console.log(status);

