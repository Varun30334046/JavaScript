//Task 1
function yearlySalary(monthlySalary) {
    return monthlySalary * 12;
}
let salary = 45000;
console.log("Yearly Salary : ₹" + yearlySalary(salary));


// Task 2
function checkResult(marks) {
    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

checkResult(72);


// Task 3
function totalBill(price, quantity) {
    return price * quantity;
}
console.log("Total Bill : ₹" + totalBill(180, 3));


// Task 4
function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department);
}
welcomeEmployee("Naveen", "Development");


// Task 5
function finalAmount(price, discount) {
    return price - discount;
}
console.log("Final Amount : ₹" + finalAmount(5000, 500));


// Task 6
function login(callback) {
    console.log("Login Successful");
    callback();
}
function dashboard() {
    console.log("Loading Dashboard...");
}
login(dashboard);


// Task 7
function order(status) {
    console.log(status);
}
function foodDelivery(callback) {
    callback("Order Received");
    callback("Preparing Food");
    callback("Out for Delivery");
    callback("Delivered");
}
foodDelivery(order);


// Task 8
function* coupons() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}
let coupon = coupons();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// Task 9
function bonus(Salary) {
    return function (bonusAmount) {
        console.log("Total Salary : " + (Salary + bonusAmount));
    };
}
bonus(50000)(5000);


// Task 10
const employeePersonal = {
    name: "Varun",
    age: 22
};
const employeeOffice = {
    id: 101,
    department: "Development"
};
const employee = {
    ...employeePersonal,
    ...employeeOffice
};
console.log(employee);


// Task 11
const cart1 = ["Mobile", "Laptop"];
const cart2 = ["Headphone", "Keyboard"];
const cart = [...cart1, ...cart2];
console.log(cart);


// Task 12
function student(name, ...marks) {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    let average = total / marks.length;
    console.log("Student :", name);
    console.log("Total Marks :", total);
    console.log("Average :", average);
}

student("Naveen", 90, 85, 88, 95);


// Task 13
const product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};

const { name, price } = product;
console.log("Name :", name);
console.log("Price :", price);


// Task 14
const customer = [101, "Varun", "Hyderabad", 9000696558];
const [id, customerName, city] = customer;

console.log("ID :", id);
console.log("Name :", customerName);
console.log("City :", city);


// Task 15
let cartItems = ["Mobile", "Laptop"];
cartItems.push("Headphone");

console.log(cartItems);


// Task 16
let cartProducts = ["Mobile", "Laptop", "Headphone"];
cartProducts.pop();

console.log(cartProducts);


// Task 17
let employees = ["Rahul", "Arun", "John", "David"];
employees.splice(2, 1, "Naveen");
console.log(employees);


// Task 18
let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];
console.log(products.includes("Laptop"));


// Task 19
let salaries = [25000, 45000, 30000, 70000];
salaries.sort((a, b) => a - b);
console.log(salaries);


// Task 20
let messages = ["Hi", "Hello", "How are you?", "Good Morning"];
messages.reverse();
console.log(messages);




// Bonus Task - Employee Management System
let employeeList = [
    {
        id: 101,
        name: "Naveen",
        Salary: 50000
    },
    {
        id: 102,
        name: "Rahul",
        Salary: 45000
    }
];

// Add Employee
employeeList.push({
    id: 103,
    name: "Arun",
    Salary: 55000
});
console.log("Employees After Adding:");
console.log(employeeList);


//View Employees
console.log("\nEmployee List:");
employeeList.forEach(emp => {
    console.log(emp);
});


// Search Employee by ID
let employeeById = employeeList.find(emp => emp.id === 102);
console.log("\nSearch Employee by ID:");
console.log(employeeById);


//Calculate Salary and Bonus
let bonusAmount = 5000;
let updatedEmployees = employeeList.map(emp => ({
    ...emp,
    totalSalary: emp.Salary + bonusAmount
}));
console.log("\nEmployees with Bonus:");
console.log(updatedEmployees);


//Remove Employee
let removeIndex = employeeList.findIndex(emp => emp.id === 102);
if (removeIndex !== -1) {
    employeeList.splice(removeIndex, 1);
}
console.log("\nEmployees After Removing:");
console.log(employeeList);


// 6. Sort Employees by Salary
employeeList.sort((a, b) => a.Salary - b.Salary);
console.log("\nEmployees Sorted by Salary:");
console.log(employeeList);


// 7. Find Employee by Name
let employeeByName = employeeList.find(emp => emp.name === "Arun");
console.log("\nFind Employee by Name:");
console.log(employeeByName);


// 8. Display Employee Details using Destructuring
const {
    id: empId,
    name: empName,
    salary: empSalary
} = employeeList[0];

console.log("\nEmployee Details");
console.log("ID :", empId);
console.log("Name :", empName);
console.log("Salary :", empSalary);