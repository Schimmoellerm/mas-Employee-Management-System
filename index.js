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
                "Add Role,", 
                "Add Employee",
                "Update Employee Role",
                "Shutdown Employee Management System",
            ] 
        }
    ])
}