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
    console.log(`connected as id ${connection.threadId}`);
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
            viewRoles();
        }else if (answers.option === 'View Employees') {
            console.log("Started View Employees")
            viewEmployees();
        }else if (answers.option === 'Add Department') {
            console.log("Started Add Department")
            addDepartment();
        }else if (answers.option === 'Add Role') {
            console.log("Started Add Role")
            addRole();
        }else if (answers.option === 'Add Employee') {
            console.log("Started Add Employee")
            addEmployee();
        }else if (answers.option === 'Update Employee Role') {
            console.log("Started Update Employee Role")
            updateEmployee();
        }else if (answers.option === 'Shutdown Employee Management System') {
            console.log("End Employee Management System")
            connection.end();
        }
    })
}

//View Departments
const viewDepartment = () => {
    console.log("Now viewing all departments.");
    connection.query("SELECT * FROM departmentTable", (err, res) => {
       if (err) throw err;
       console.table(res);
       startSystem(); 
    })
}

//View Roles
const viewRoles = () => {
    console.log("Now viewing all roles.");
    connection.query("SELECT * FROM roleTable INNER JOIN departmentTable ON roleTable.department_id = departmentTable.id", (err, res) => {
       if (err) throw err;
       console.table(res);
       startSystem(); 
    })
}

//View Employees
const viewEmployees = () => {
    console.log("Now viewing employees.");
    connection.query("SELECT * FROM employeeTable INNER JOIN roleTable ON employeeTable.role_id = roleTable.id INNER JOIN departmentTable ON roleTable.department_id = departmentTable.id", (err, res) => {
       if (err) throw err;
       console.table(res);
       startSystem(); 
    })
}

//Add Department
const addDepartment = () => {
    console.log("Adding department...")
    inquirer
    .prompt([
        {
            type: "input",
            name: "department",
            message: "Name of the Department you wish to add?"
        }
    ]).then(function (input) {
        connection.query("INSERT INTO departmentTable SET ?", {name: input.department})
        console.log("Created department.")
        viewDepartment();   
    })
}

//Add Role
const addRole = () => {
    console.log("Adding department...")
    inquirer.prompt([
        {
            type: "input",
            name: "role",
            message: "Name of the role you wish to add?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the base salary for this role?"
        },
        {
            type: "input",
            name: "deptID",
            message: "What is the department number for this role?"
        }
    ]).then(function (input) {
        connection.query("INSERT INTO roleTable SET ?", {
            title: input.role,
            salary: input.salary,
            department_id: input.deptID
        })
        console.log("Created Role");
        viewRoles();
    })
}

//Add Employee
const addEmployee = () => {
    console.log("Adding Employee")
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "First name of new employee?"
        },
        {
            type: "input",
            name: "lastName",
            message: "Last name of new employee?"
        },
        {
            type: "input",
            name: "roleID",
            message: "Role number of new Employee?"
        },
        {
            type: "input",
            name: "managerID",
            message: "ID number of manager?"
        },
    ]).then(function (input) {
        connection.query("INSERT INTO employeeTable SET ?", {
            first_name: input.firstName,
            last_name: input.lastName,
            role_id: input.roleID,
            manager_id: input.managerID
        })
        console.log("Employee Added!");
        viewEmployees();
    })
}
//Update Employee Role
const updateEmployee = () => {
    console.log("Updateing Employee...");
    inquirer.prompt([
        {
            type: "input",
            name: "employee",
            message: "What is the ID# of the employee you wish to update?"
        },
        {
            type: "input",
            name: "role",
            message: "What is the new Role number of the employee?"
        }
    ]).then(function (input) {
        connection.query("UPDATE employeeTable SET ? WHERE ?", [{
            role_id: input.role
        }, 
        {
            id: input.employee
        }], function(err, data) {
                if (err) {
                    console.log(err)
                    return;
                }else
                console.log("Employee role updated", data);
                viewEmployees();
        })       
    }) 
}