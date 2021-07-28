
const inquirer = require("inquirer");
// get the client
const mysql = require('mysql2');


const cTable = require('console.table');
// console.table([
//     {
//         first_name: 'Ann',
//         last_name: 'Divine',
//         dept_name: 'Sales',
//         role: 'Salesperson',
//         salary: 10000
//     },
//     {
//         first_name: 'Rav',
//         last_name: 'Divine',
//         dept_name: 'Marketing',
//         role: 'Marketer',
//         salary: 12000
//     },
//     {
//         first_name: 'Tulu',
//         last_name: 'Anzana',
//         dept_name: 'Engineering',
//         role: 'Engineer',
//         salary: 50000
//     },
//     {
//         first_name: 'Sana',
//         last_name: 'Karibu',
//         dept_name: 'Design',
//         role: 'Designer',
//         salary: 15000
//     },
//     {
//         first_name: 'Fike',
//         last_name: 'Lanet',
//         dept_name: 'Finance',
//         role: 'Head of Finance',
//         salary: 14000
//     }
// ]);

// cTable();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#cde01Wamz#',
    database: 'department_db'
});


// simple query
// db.query(
//     'SELECT * FROM department JOIN role_category ON department.id=department_id',
//     function (err, results) {
//         console.log(results); // results contains rows returned by server
//     }
// );

const viewDept = () => {
    db.query('SELECT * FROM department JOIN role_category ON department.id=department_id', (err, data) => {
        if (err) {
            console.log(err);
            db.end();
        } else {
            console.table(data);
            main();
        };
    });
};

// db.query(
//     'SELECT * FROM role_category JOIN employee ON role_category.id=role_id',
//     function (err, results) {
//         console.log(results); // results contains rows returned by server
//     }
// );

const viewRoles = () => {
    db.query('SELECT * FROM role_category JOIN employee ON role_category.id=role_id', (err, data) => {
        if (err) {
            console.log(err);
            db.end();
        } else {
            console.table(data);
            main();
        };
    });
};

// db.query(
//     'SELECT * FROM department JOIN (role_category JOIN employee ON role_category.id=role_id) ON department.id=department_id',
//     function (err, results) {
//         console.log(results); // results contains rows returned by server
//     }
// );

const viewEmployees = () => {
    db.query('SELECT * FROM department JOIN (role_category JOIN employee ON role_category.id=role_id) ON department.id=department_id', (err, data) => {
        if (err) {
            console.log(err);
            db.end();
        } else {
            console.table(data);
            main();
        };
    });
};

const addDept = () => {
    inquirer.prompt([
        {
        type: "input",
        name: "add-department",
        message: "Enter name of Department:"
        }
    ]).then(answers =>{
        db.query('INSERT INTO department_name (add-department) VALUES(?)', [answers.add-department], (err, data)=>{
            if (err) {
                console.log(err);
                db.end();
            } else {
                console.log("Department added")
                viewDept();
            };
        })
    });
};

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "add-role",
            message: "Enter role:"
        }
    ]).then(answers =>{
        db.query('INSERT INTO role_title (add-role) VALUES(?)', [answers.add-role], (err, data)=>{
            if (err) {
                console.log(err);
                db.end();
            } else {
                console.log("Role added")
                viewRoles();
            };
        })
    });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "add-employee",
            message: "Enter first and last name of employee:"
        }
    ]).then(answers =>{
        db.query('INSERT INTO first_name,last_name (add-employee) VALUES(?)', [answers.add-employee], (err, data)=>{
            if (err) {
                console.log(err);
                db.end();
            } else {
                console.log("Employee added")
                viewEmployees();
            };
        })
    });
};

const main = () => {

    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }).then(({ choice }) => {
        switch (choice) {
            case "View all departments":
                viewDept();

                break;
            case "View all roles":
                viewRoles();

                break;
            case "View all employees":
                viewEmployees();

                break;
            case "Add a department":
                addDept();

                break;
            case "Add a role":
                addRole();

                break;
            case "Add an employee":
                addEmployee();

                break;
            // case "Update an employee role":
            //     inquirer.prompt({
            //         type: "input",
            //         name: "update-employee",
            //         message: "Enter update:"
            //     });

                break;

            default:
                console.log("Goodbye!");
                db.end()
                break;
        }
    });
};


main();