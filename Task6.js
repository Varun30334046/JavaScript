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
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

// Task 1

let highestEmployee = employees[0];
for (let emp of employees) {
    if (emp.salary > highestEmployee.salary) {
        highestEmployee = emp;
    }
}
console.log("Highest Salary :", highestEmployee.salary);
console.log("Employee Name :", highestEmployee.name);


// Task 2

let searchId = 103;
let found = false;
for (let emp of employees) {
    if (emp.id === searchId) {
        console.log("Employee Found");
        console.log("Name :", emp.name);
        console.log("Salary :", emp.salary);
        found = true;
    }
}
if (!found) {
    console.log("Employee Not Found");
}


// Task 3

let bonus = 5000;
for (let emp of employees) {
    console.log(emp.name + " :", emp.salary + bonus);
}

// Task 4

let employeeExperience = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];
for (let emp of employeeExperience) {
    if (emp.experience >= 5) {
        console.log(emp.name + " - Senior Employee");
    } else {
        console.log(emp.name + " - Junior Employee");
    }
}

// Task 5

for (let emp of employees) {
    console.log(emp.name);
}

// Task 6

for (let emp of employees) {
    console.log(emp.id);
}

// Task 7

let totalSalary = 0;
for (let emp of employees) {
    totalSalary += emp.salary;
}
console.log("Total Salary :", totalSalary);

// Task 8

for (let emp of employees) {
    if (emp.salary > 40000) {
        console.log(emp.name);
    }
}

// Task 9

for (let emp of employees) {
    console.log(emp.name + " :", emp.salary + 5000);
}

// Task 10

for (let emp of employees) {
    console.log(`
Employee Name : ${emp.name}
Employee ID : ${emp.id}
Salary : ${emp.salary}
`);
}



// Challenge Task

console.log("Total Employees :", employees.length);
let highest = employees[0];
let lowest = employees[0];
let total = 0;
for (let emp of employees) {
    total += emp.salary;
    if (emp.salary > highest.salary) {
        highest = emp;
    }
    if (emp.salary < lowest.salary) {
        lowest = emp;
    }
}
console.log("Highest Salary :", highest.salary);
console.log("Highest Salary Employee :", highest.name);
console.log("Lowest Salary :", lowest.salary);
console.log("Lowest Salary Employee :", lowest.name);
console.log("Total Salary :", total);
console.log("Employees earning more than 40000");

for (let emp of employees) {
    if (emp.salary > 40000) {
        console.log(emp.name);
    }
}

let id = 102;
let employeeFound = false;
for (let emp of employees) {
    if (emp.id === id) {
        console.log("Employee Found");
        console.log("Name :", emp.name);
        console.log("Salary :", emp.salary);
        employeeFound = true;
    }
}
if (!employeeFound) {
    console.log("Employee Not Found");
}
console.log("Salary After Bonus");
for (let emp of employees) {
    console.log(emp.name + " :", emp.salary + 5000);
}
for (let emp of employees) {
    console.log(`
Employee Name : ${emp.name}
Employee ID : ${emp.id}
Salary : ₹${emp.salary}
`);
}