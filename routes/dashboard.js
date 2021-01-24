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
        conn.query('SELECT * FROM tab_siswa', function(err, results, fields){
        if(err) throw err;
        input.read_tab_user(function(email, nomerhp){
            res.render('dashboard', { 
                user:req.session.username, 
                data:results, 
                email:email,
                nohp: nomerhp
            }); 
        });
        
    });
    }
    

});

module.exports = router;