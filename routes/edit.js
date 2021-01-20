var express = require('express');
var router = express.Router();
var conn = require('../controller/database');


router.get('/:id',function(req, res){
    var getid = req.params.id;

    var data = {
        nis : req.body.nis,
        nama_lengkap : req.body.nama,
        kelas : req.body.kelas,
        jurusan : req.body.jurusan,
        tempat_lahir : req.body.tempatl,
        tanggal_lahir : req.body.tgll,
        alamat : req.body.alamat,
        email : req.body.email,
        no_telp : req.body.notelp
    };
    
    conn.query('SELECT FROM tab_siswa WHERE id = ?', [getid], function(err, results, fields){
        if(err) throw err;
        if(results.length > 0){
            res.render('edit_page', {text : "Edit data Siswa", id:getid}) 
        }else{
            res.send("Data not found!");
        }
          
    });
})

module.exports = router;