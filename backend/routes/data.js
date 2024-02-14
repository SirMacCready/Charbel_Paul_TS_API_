let express = require('express');
let router = express.Router();
let conn  = require('../Database/dbConnection.js');
//data : gets the stored data 
router.get('/data', function(req, res, next) {
    //Will get all data required such as Ships,Items,Supplies etc...

    res.sendStatus(200);
  });
router.get('/data/', function(req, res, next) {
    //Will get all data required such as Ships,Items,Supplies etc...
    res.sendStatus(200);
  });

  
module.exports = router;
