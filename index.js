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
});