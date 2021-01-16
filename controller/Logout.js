var express = require('express');
var session = require('express-session');
var router = express.Router();

var logout = router.get('/dashboard',function(req, res){
    req.session.destroy();
    res.redirect('/');
})