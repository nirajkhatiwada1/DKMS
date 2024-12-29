const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',  // Replace with your MySQL host
  user: 'root',       // Your MySQL username
  password: 'position1',       // Your MySQL password
  database: 'dkms'    // The name of your database
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Endpoint to get data from Key_Information
app.get('/key-information', (req, res) => {
  const sql = 'SELECT * FROM Key_Information';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
