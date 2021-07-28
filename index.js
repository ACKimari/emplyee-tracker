const express = require('express');
const inquirer = require("inquirer");
// get the client
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const cTable = require('console.table');
console.table([
  {
    name: '',
    role: 'Salesperson'
  }, {
    name: 'bar',
    age: 20
  }
]);
 
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#cde01Wamz#',
  database: 'department_db'
});
 
// Query database
db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });

// Query database
db.query('SELECT * FROM role_category', function (err, results) {
    console.log(results);
  });
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

inquirer.prompt