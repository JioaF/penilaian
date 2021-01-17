var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

//router file setup
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var logoutRouter = require('./routes/logout');
var aboutRouter = require('./routes/about');
var dashboardRouter = require('./routes/dashboard')

var app = express();

//create session
app.use(session({
  secret:'secret',
  resave : true,
  saveUninitialized : true
}));

//body parser
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//router setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter)
app.use('/logout', logoutRouter);
app.use('/about', aboutRouter);

/**
 * if come out with not found error 
 * just remember the router file doesnt need
 * the name of http method url name. it just need '/'
 * example the route file of dashboard doesnt need 
 * router.get('/dashboard') it just need router.get('/')
 * 
 */

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
