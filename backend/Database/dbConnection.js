const mysql = require('mysql2');
const retry = require("retry")
const dns = require('dns');  
//Connecting to DB
let con = mysql.createConnection({
  host: "db",
  user: "root",
  database: 'anno_1800_app',
  port: "3306"
});
let operation = retry.operation({
  retries: 5,
  factor: 2,
  minTimeout: 1000,
  maxTimeout: 10000,
  randomize: true,
});

//Tries to connect to the DB , if fails, restarts (It requires a backend image restart (db needs to finish launching first before backend )for I don't know why.)
operation.attempt(function(currentAttempt) {
  con.connect(function (err) {
    console.log("retrying...");
    if (operation.retry(err)) {
      console.log("retry number : "+ String(currentAttempt));
      return;
    }
    if (err) {
      console.error('Failed to connect to the database:', err);
      return;
    }
    console.log("In the DB");
    con.end();
  });
});

module.exports = con;