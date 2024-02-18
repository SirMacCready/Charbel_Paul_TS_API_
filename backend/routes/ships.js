var express = require('express');
var router = express.Router();
let con  = require('../Database/dbConnection.js');
//ships : Handles All possible changes made to ships them-selfs
//"her" mentionning the Ship her-self
router.get('/herName', function(req, res, next) {
  function getShips()
{
    return new Promise(function(resolve, reject) {

        var query_str =
        "SELECT * FROM ships"

        con.query(query_str, function (err, result, fields) {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
    
}
getShips().then(function(results) {
  res.json(results)
}).catch((err) => setImmediate(() => { throw err; }));
})
    
  //Retrieve her ( them )
router.post('/herNewHull', function(req, res, next) {
  //Adds new ships
  //WIP
  res.sendStatus(200);
});

router.put('/herModifiedHull/herId=:herId', function(req, res, next) {
  //Updates ships Specs
  //WIP
  res.json({requestBody: req.params})
});

router.delete('/herEnd/:herId', function(req, res, next) {
  //Deletes ships from DB
  //WIP
  res.sendStatus(200);
});


module.exports = router;