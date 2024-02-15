let sql = ""
function get() { 
        sql = "SELECT * FROM ? WHERE ?.id = ?;"
        con.query(sql,values, function (err, result) {
            if (err) throw err;

            console.log("Result: " + result);
          });
    }
function post() {
        sql = "INSERT INTO ? VALUES ?;"
        con.query(sql,values, function (err, result) {
            if (err) throw err;

            console.log("Result: " + result);
          });
    }
function put() {
        sql = "UPDATE ? SET ? WHERE ?;"
        con.query(sql,values, function (err, result) {
            if (err) throw err;

            console.log("Result: " + result);
          });
    }
function del() {
        sql = "DELETE FROM ? WHERE ?;"
        con.query(sql,values, function (err, result) {
            if (err) throw err;
            
            console.log("Result: " + result);
          });
    }