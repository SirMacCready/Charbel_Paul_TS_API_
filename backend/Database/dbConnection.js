const mysql = require('mysql');

//Connecting to DB
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'anno_1800_app',
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;