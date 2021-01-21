var express = require('express');
var router = express.Router();
var conn = require('../controller/database');
var insert = require('../controller/crud');

router.get('/',function(req, res){
    res.render('../views/add_page.ejs',{text : "Tambah Data Siswa"});

    //declaring the input name
    
});

router.post('/',function(req, res){
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

    insert.create('INSERT INTO tab_siswa SET ? ', data);
    res.redirect('/dashboard')
    res.end;
});
 
module.exports = router;