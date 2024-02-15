let express = require('express');
let router = express.Router();
let con  = require('../Database/dbConnection.js');
//data : gets the stored data 

router.get('/getAllData', function(req, res, next) {
    //Will get all data required such as Ships,Items,Supplies etc...
    results = {
      
    }
    
    res.sendStatus(200);
  });
router.get('/getData/:id', function(req, res, next) {
  //get Specific data
  res.json({requestBody: req.params})
  });

  
module.exports = router;
