const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mySQL',
    database: 'emsdb',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    startSystem();
});

const startSystem = () => {
   inquirer
    .prompt([
        {
            type: "list",
            message: "Employee Management System",
            name: "option",
            choices: [
                "View Departments", 
                "View Roles", 
                "View Employees", 
                "Add Department", 
                "Add Role", 
                "Add Employee",
                "Update Employee Role",
                "Shutdown Employee Management System",
            ] 
        },
    ]).then(answers => {
        if(answers.option === 'View Departments') {
            console.log("Started View Departments")
            viewDepartment();
        }else if (answers.option === 'View Roles') {
            console.log("Started View Roles")
            startSystem();
        }else if (answers.option === 'View Employees') {
            console.log("Started View Employees")
            startSystem();
        }else if (answers.option === 'Add Department') {
            console.log("Started Add Department")
            startSystem();
        }else if (answers.option === 'Add Role') {
            console.log("Started Add Role")
            startSystem();
        }else if (answers.option === 'Add Employee') {
            console.log("Started Add Employee")
            startSystem();
        }else if (answers.option === 'Update Employee Role') {
            console.log("Started Update Employee Role")
            startSystem();
        }else if (answers.option === 'Shutdown Employee Management System') {
            console.log("Started Shutdown Employee Management System")
            startSystem();//needs to go to a shutdown system function
        }
    })
}

//View Departments
const viewDepartment = () => {
    console.log("Now viewing all departments")
    connection.query("SELECT * FROM departmentTable", (err, res) => {
       if (err) throw err;
       console.table(res);
       startSystem(); 
    })
}

//View Roles
const viewRo

//View Employees

//Add Department

//Add Role

//Add Employee

//Update Employee Role
