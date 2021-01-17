var express = require('express');
var router = express.Router();
var conn = require('../controller/database');

//check if the user is login or not
router.get('/', function(req, res, next) {
    if(req.session.loggedin){
       res.redirect('/dashboard');
    }else{
      res.send("Please Login to see this page!");
    }
    res.end();
  });

  module.exports = router;
  