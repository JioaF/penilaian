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
        conn.query('SELECT * FROM tab_siswa; SELECT * FROM tab_user', function(err, results, fields){
        if(err) throw err;
        if(results[1].length > 0){
            results[1].forEach(element => {
                console.log(element.nomerhp);
                res.render('dashboard', {user:req.session.username, 
                    data:results[0], 
                    email:element.email,
                    nohp: element.nomerhp
                });        
            });
        }else{
            res.send("Data not found!");
        }
        
    });

    // conn.query('SELECT * FROM tab_user', function(err, results, fields){
    //     if(err) throw err;
        
    //     res.render('dashboard', {data2:results});
    // });
    }
    

});

module.exports = router;