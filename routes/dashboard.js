var express = require('express');
var router = express.Router();
var conn = require('../controller/database');

/**
 * fix the authentication
 */


router.get('/',function(req, res){
    if(req.session.loggedin == false){
        res.send("Login First");
    }else{
        var queryTxt = 'SELECT * FROM tab_siswa';
        conn.query(queryTxt, function(error, results, fields){
        if(error) throw error;
        res.render('dashboard', {user:req.session.username, data:results});
    });
    }
    

})

module.exports = router;