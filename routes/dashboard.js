var express = require('express');
var router = express.Router();
var conn = require('../controller/database');

var auth = require('./auth')

router.get('/',function(req, res){
    if(req.session.loggedin == false){
        res.send("Login First");
    }else{
        var queryTxt = 'SELECT * FROM tab_siswa';
        conn.query(queryTxt, function(error, results, fields){
        if(error) throw error;
        res.render('dashboard', {user:req.session.username, data:results});
        console.log(req.session.username);
        console.log(req.originalUrl);
        console.log(req.path);
    });
    }
    

})

module.exports = router;