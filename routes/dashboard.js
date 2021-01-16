var express = require('express');
var router = express.Router();
// var logout = require('../controller/Logout');

//check if the user is login or not
router.get('/', function(req, res, next) {
    if(req.session.loggedin){
        res.render('dashboard', {user : req.session.username});
    }else{
      res.send("Please Login to see this page!");
    }
    res.end();
  });
  
router.get('/dashboard', function(req, res){
    if(req.session.loggedin){
        res.render('dashboard', {user : req.session.username});
    }else{
      res.send("Please Login to see this page!");
    }
    res.end();
});

  module.exports = router;
  