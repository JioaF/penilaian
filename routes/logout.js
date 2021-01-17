var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
    req.session.loggedin = false;
    res.redirect('/');
});

module.exports = router;