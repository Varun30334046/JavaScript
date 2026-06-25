//Task 1
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    }
];

for(let emp of employees){
    console.log("Name:", emp.name);
    console.log("ID:", emp.id);

    if(emp.salary > 50000){
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }
}

// Task 2

let marks1 = 95;
let marks2 = 85;
let marks3 = 75;

let total = marks1 + marks2 + marks3;
let percentage = total / 3;

console.log("Total:", total);
console.log("Percentage:", percentage);

if(percentage >= 90){
    console.log("Grade: A+");
}
else if(percentage >= 80){
    console.log("Grade: A");
}
else if(percentage >= 70){
    console.log("Grade: B");
}
else if(percentage >= 60){
    console.log("Grade: C");
}
else{
    console.log("Fail");
}

// Task 3

let products = [
    {name:"Laptop", price:50000},
    {name:"Mouse", price:1000},
    {name:"Keyboard", price:2000}
];

function calculateBill(items){
    let total = 0;

    for(let item of items){
        total += item.price;
    }

    if(total > 5000){
        total = total - (total * 0.10);
        console.log("10% Discount Applied");
    }

    return total;
}

console.log("Final Bill:", calculateBill(products));

//Task 4
let username = "admin";
let password = "12345";

let result =
(username === "admin" && password === "12345")
? "Login Success"
: "Invalid Credentials";

console.log(result);

//Task 5

let signal = "Red";

switch(signal){
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

//Task 6

let balance = 10000;
let withdraw = 3000;

if(withdraw <= balance){
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
}
else{
    console.log("Insufficient Balance");
}

//task 7
function orderFood(callback){
    console.log("Order Received");
    callback();
}

function prepareFood(callback){
    console.log("Food Preparing");
    callback();
}

function deliverFood(){
    console.log("Food Delivered");
}

orderFood(function(){
    prepareFood(function(){
        deliverFood();
    });
});

// Task 8

function* cashbackGenerator(){
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offer = cashbackGenerator();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Task 9

let age = 25;
let weight = 60;

if(age > 18){
    if(weight > 50){
        console.log("Eligible For Treatment");
    }
    else{
        console.log("Not Eligible");
    }
}
else{
    console.log("Not Eligible");
}

// Task 10 

let employeePortal = [
    { id: 101, name: "Naveen", salary: 30000 },
    { id: 102, name: "John", salary: 60000 }
];

function addEmployee(id, name, salary) {
    employeePortal.push({ id, name, salary });
}

function viewEmployees() {
    console.log(employeePortal);
}

function searchEmployee(id) {
    let emp = employeePortal.find(e => e.id === id);
    console.log(emp || "Employee Not Found");
}

function deleteEmployee(id) {
    employeePortal = employeePortal.filter(e => e.id !== id);
}

function calculateBonus() {
    employeePortal.forEach(emp => {
        if (emp.salary > 50000) {
            console.log(`${emp.name} Eligible For Bonus`);
        }
    });
}

function employeeCount() {
    console.log("Total Employees:", employeePortal.length);
}

addEmployee(103, "Rahul", 70000);

viewEmployees();
searchEmployee(102);
calculateBonus();
deleteEmployee(101);
employeeCount();