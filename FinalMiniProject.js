// Final Mini Project

let employees = [
    {
        id: 101,
        name: "Naveen",
        salary: 30000
    },
    {
        id: 102,
        name: "John",
        salary: 45000
    },
    {
        id: 103,
        name: "Arun",
        salary: 60000
    },
    {
        id: 104,
        name: "Rahul",
        salary: 55000
    }
];

function viewEmployees() {
    employees.forEach(employee => {
        console.log(employee);
    });
}

function searchEmployee(id, callback) {
    let employee = employees.find(employee => employee.id === id);
    callback(employee);
}

function displayEmployee(employee) {
    if (employee) {
        console.log(employee);
    } else {
        console.log("Employee Not Found");
    }
}

function addBonus() {
    employees = employees.map(employee => {
        return {
            ...employee,
            salary: employee.salary + 5000
        };
    });

    console.log("Bonus Added");
    console.log(employees);
}

function highestSalary() {
    let employee = employees.reduce((highest, current) => {
        return current.salary > highest.salary ? current : highest;
    });

    console.log(employee);
}

function lowestSalary() {
    let employee = employees.reduce((lowest, current) => {
        return current.salary < lowest.salary ? current : lowest;
    });

    console.log(employee);
}

function totalSalary() {
    let total = employees.reduce((sum, employee) => {
        return sum + employee.salary;
    }, 0);

    console.log("Total Salary:", total);
}

function salaryAbove40000() {
    let result = employees.filter(employee => employee.salary > 40000);
    console.log(result);
}

function employeeReport() {
    employees.forEach(employee => {
        console.log(`
Employee ID : ${employee.id}
Employee Name : ${employee.name}
Employee Salary : ₹${employee.salary}
-----------------------------
`);
    });
}

function currentDateTime() {
    console.log(new Date().toLocaleString());
}

function fetchEmployees() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log("Employee Data From API");
            data.forEach(employee => {
                console.log(employee.name);
            });
        });
}

let choice = Number(prompt(
`Employee Payroll System

1. View Employees
2. Search Employee by ID
3. Add Bonus
4. Find Highest Salary
5. Find Lowest Salary
6. Calculate Total Salary
7. Filter Salary Above ₹40,000
8. Print Employee Report
9. Display Current Date & Time
10. Fetch Employee Data from API
11. Exit`
));

switch (choice) {

    case 1:
        viewEmployees();
        break;

    case 2:
        let id = Number(prompt("Enter Employee ID"));
        searchEmployee(id, displayEmployee);
        break;

    case 3:
        addBonus();
        break;

    case 4:
        highestSalary();
        break;

    case 5:
        lowestSalary();
        break;

    case 6:
        totalSalary();
        break;

    case 7:
        salaryAbove40000();
        break;

    case 8:
        employeeReport();
        break;

    case 9:
        currentDateTime();
        break;

    case 10:
        fetchEmployees();
        break;

    case 11:
        console.log("Application Closed");
        break;

    default:
        console.log("Invalid Choice");
}