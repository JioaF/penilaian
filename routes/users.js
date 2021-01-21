var express = require('express');
// const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.loggedin){
    res.send("Hello, " + req.session.username);
  }else{
    res.send("Please Login to see this page!");
  }
  res.end();
});

module.exports = router;
