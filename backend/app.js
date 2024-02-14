var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var dataRouter = require('./routes/data');
var expeditionRouter = require('./routes/expedition');
var itemsRouter = require('./routes/items');
var shipsRouter = require('./routes/ships');
const con = require('./Database/dbConnection');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use (cors());
app.use(express.json());
app.use (bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/data', dataRouter);
app.use('/expedition', expeditionRouter);
app.use('/items', itemsRouter);
app.use('/ships', shipsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
