// Task 1

let students = [
    {
        name: "Naveen",
        id: 101,
        mark: 85
    },
    {
        name: "John",
        id: 102,
        mark: 45
    },
    {
        name: "Arun",
        id: 103,
        mark: 25
    }
];

for (let student of students) {
    console.log(student);
}

for (let student of students) {
    console.log(student.name);
}

for (let student of students) {
    if (student.id === 102) {
        console.log(student);
    }
}

for (let student of students) {
    if (student.mark >= 35) {
        console.log(student);
    }
}

console.log(students.length);


// Task 2

let employees = [
    {
        name: "Naveen",
        salary: 30000
    },
    {
        name: "John",
        salary: 45000
    },
    {
        name: "Arun",
        salary: 60000
    }
];

let highest = employees[0];

for (let employee of employees) {
    if (employee.salary > highest.salary) {
        highest = employee;
    }
}

console.log(highest);

let lowest = employees[0];

for (let employee of employees) {
    if (employee.salary < lowest.salary) {
        lowest = employee;
    }
}

console.log(lowest);

for (let employee of employees) {
    employee.salary += 5000;
    console.log(employee);
}

let totalSalary = 0;

for (let employee of employees) {
    totalSalary += employee.salary;
}

console.log(totalSalary);

for (let employee of employees) {
    if (employee.salary > 40000) {
        console.log(employee);
    }
}


// Task 3

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1500
    }
];

for (let product of products) {
    console.log(product.name);
}

let totalBill = 0;

for (let product of products) {
    totalBill += product.price;
}

console.log(totalBill);

for (let product of products) {
    if (product.name === "Mouse") {
        console.log(product);
    }
}

let finalBill = 0;

for (let product of products) {
    let discountPrice = product.price - (product.price * 10 / 100);
    console.log(product.name, discountPrice);
    finalBill += discountPrice;
}

console.log(finalBill);


// Task 4

let account = {
    name: "Naveen",
    balance: 50000
};

account.balance += 10000;

account.balance -= 5000;

console.log(account.balance);

if (account.balance < 20000) {
    console.log("Balance is below ₹20,000");
} else {
    console.log("Balance is above ₹20,000");
}

console.log(account);


// Task 5

let username = prompt("Enter Username");

let password = prompt("Enter Password");

let correctUsername = "admin";

let correctPassword = "1234";

if (username === correctUsername && password === correctPassword) {
    alert("Welcome");
} else {
    alert("Invalid Username or Password");
}

// Task 6

let signal = prompt("Enter Signal (Red, Yellow, Green)");

switch (signal.toLowerCase()) {
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


// Task 7

let balance = 5000;

let choice = Number(prompt("1.Balance\n2.Deposit\n3.Withdraw\n4.Exit"));

switch (choice) {
    case 1:
        console.log("Balance:", balance);
        break;

    case 2:
        let deposit = Number(prompt("Enter Deposit Amount"));
        balance += deposit;
        console.log("Balance:", balance);
        break;

    case 3:
        let withdraw = Number(prompt("Enter Withdraw Amount"));
        balance -= withdraw;
        console.log("Balance:", balance);
        break;

    case 4:
        console.log("Thank You");
        break;

    default:
        console.log("Invalid Choice");
}


// Task 8

let score = [10, 25, 40, 60, 80, 100];

let highest = score[0];
let lowest = score[0];
let total = 0;

for (let marks of score) {

    if (marks > highest) {
        highest = marks;
    }

    if (marks < lowest) {
        lowest = marks;
    }

    total += marks;
}

let average = total / score.length;

console.log(highest);
console.log(lowest);
console.log(total);
console.log(average);


// Task 9

let age = Number(prompt("Enter Your Age"));

let ticket = confirm("Do you want to book the movie ticket?");

if (ticket) {

    if (age >= 18) {
        alert("Movie Allowed");
    } else {
        alert("Not Allowed");
    }

} else {
    alert("Booking Cancelled");
}


// Task 10

let token = Number(prompt("Enter Token Number (1-3)"));

switch (token) {

    case 1:
        console.log("Doctor A");
        break;

    case 2:
        console.log("Doctor B");
        break;

    case 3:
        console.log("Doctor C");
        break;

    default:
        console.log("Invalid Token");
}


// Task 11

let fruits = ["Apple", "Orange", "Banana"];

console.log(fruits);

fruits.push("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Grapes");
console.log(fruits);

fruits.splice(1, 1, "Pineapple");
console.log(fruits);

console.log(fruits.slice(0, 2));


// Task 12

let employees = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 35000 },
    { name: "C", salary: 50000 },
    { name: "D", salary: 70000 }
];

let increasedSalary = employees.map(employee => {
    return {
        name: employee.name,
        salary: employee.salary + 5000
    };
});

console.log(increasedSalary);

let filteredEmployees = employees.filter(employee => employee.salary > 30000);
console.log(filteredEmployees);

let employee = employees.find(employee => employee.salary === 50000);
console.log(employee);

let totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log(totalSalary);

let checkSome = employees.some(employee => employee.salary > 60000);
console.log(checkSome);

let checkEvery = employees.every(employee => employee.salary > 15000);
console.log(checkEvery);


// Task 13

let company = " Stackly IT ";

console.log(company.toUpperCase());

console.log(company.toLowerCase());

console.log(company.trim());

console.log(company.replace("IT", "Software"));

console.log(company.includes("Stackly"));

console.log(company.split(" "));


// Task 14

let clock = setInterval(() => {

    console.log(new Date().toLocaleTimeString());

}, 1000);

setTimeout(() => {

    clearInterval(clock);
    console.log("Clock Stopped");

}, 10000);


// Task 15

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    products.forEach(product => {
        console.log(product.title);
    });

    products.forEach(product => {
        console.log(product.price);
    });

    products.filter(product => product.price > 100)
    .forEach(product => {
        console.log(product);
    });

    console.log(products.length);

    products.forEach(product => {
        console.log(product.category);
    });

});


