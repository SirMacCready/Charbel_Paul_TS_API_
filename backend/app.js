const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");

//Routes
const indexRouter = require('./routes/index');
const expeditionRouter = require('./routes/expedition');
const itemsRouter = require('./routes/items');
const shipsRouter = require('./routes/ships');
const con = require('./Database/dbConnection');

const app = express();

const port = "1337"


//Using Routes 
app.use (cors());
app.use(express.json());
app.use (bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);
app.use('/expedition', expeditionRouter);
app.use('/items', itemsRouter);
app.use('/ships', shipsRouter);


app.listen(port, function () {
  console.log("Express server listening on port "+ port);
  });
module.exports = app;
