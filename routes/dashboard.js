var express = require('express');
var router = express.Router();
var conn = require('../controller/database');
var input = require('../controller/crud');

/**
 * fix the authentication
 */


router.get('/',function(req, res){
    if(req.session.loggedin == false){
        res.send("Login First");
    }else{

        var user = {
            user : req.session.username,
            email : req.session.email,
            nohp : req.session.nohp
        }

        res.render('dashboard'); 
        // input.read(function(email, nomerhp){
           
        // });

    }
    

});

module.exports = router;