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
        conn.query(
        `SELECT count(*) as totalsiswa from tab_siswa; 
        SELECT count(*) as totalguru from tab_guru; 
        SELECT count(*) as totalmapel from tab_pelajaran`,function (err, results, fields) {
        if(err)throw err;
        res.render('dashboard', {siswa:results[0][0].totalsiswa, guru:results[1][0].totalguru, mapel:results[2][0].totalmapel});
        })

    }
    

});

module.exports = router;