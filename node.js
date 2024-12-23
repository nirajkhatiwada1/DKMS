const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "position1",
    database: "DKMS"
});

db.connect(err => {
    if (err) throw err;
    console.log("Database connected!");
});

app.get("/fetch-data", (req, res) => {
    db.query("SELECT * FROM Duplicate_Key_Request", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));