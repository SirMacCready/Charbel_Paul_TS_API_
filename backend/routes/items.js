var express = require('express');
var router = express.Router();
let con  = require('../Database/dbConnection.js');

//items : Handles All possible changes made to items them-selfs
router.get('/getItems', function(req, res, next) {
  //Adds new items
  function getItems()
{
  return new Promise(function(resolve, reject) {
      // The Promise constructor should catch any errors thrown on
      // this tick. Alternately, try/catch and reject(err) on catch.

      var query_str =
      "SELECT * FROM items"

      con.query(query_str, function (err, rows, fields) {
          // Call reject on error states,
          // call resolve with results
          if (err) {
              return reject(err);
          }
          resolve(rows);
      });
  });
  
}
getItems().then(function(results) {
res.json(results)
}).catch((err) => setImmediate(() => { throw err; }));
console.log('eeeeeeeeeeeeeee');
});
  
router.post('/newitem', function(req, res, next) {
  //Adds new items
  
  res.sendStatus(200);
});

router.put('/thisItem/:itemId', function(req, res, next) {
  //Updates  Items Specs
  res.sendStatus(200);
});

router.delete('/badItem/:itemId', function(req, res, next) {
  //Deletes Items from DB
  res.sendStatus(200);
});


module.exports = router;
