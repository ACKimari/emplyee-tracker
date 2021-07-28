const inquirer = require("inquirer");
// get the client
const mysql = require('mysql2');
 
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
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

inquirer.prompt