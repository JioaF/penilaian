var express = require('express');
var router = express.Router();
var conn = require('../controller/database');
var md5 = require('crypto-js/md5');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , 
  h1:'Login',
username:'Username',
password:'Password'});
req.session.loggedin = false;
});

/**GET post value & auth the login  */
router.post('/', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  var hash = md5(password);

  if(username && password){
    conn.query('SELECT * FROM tab_user WHERE username = ? AND password = ?', 
    [username, password], function(error, results, fields){
      if(results.length > 0){
        console.log(fields.name);
        req.session.loggedin = true,
        req.session.username = username,
        res.redirect('/dashboard');
      }else{
        res.send('Incorrect username / password');
      }
      res.end()
    });
  }else{
    res.send("Please Enter Username & Password!");
    res.end();
  }
});

module.exports = router;
