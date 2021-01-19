var express = require('express');
var router = express.Router();
var conn = require('../controller/database');
var insert = require('../controller/crud');

router.get('/',function(req, res){
    res.render('../views/add_page.ejs',{text : "Tambah Data Siswa"});

    //declaring the input name
    
});

router.post('/',function(req, res){
    // var nis = req.body.nis;
    // var fullname = req.body.nama;
    // var kelas = req.body.kelas;
    // var jurusan = req.body.jurusan;
    // var tempatl = req.body.tempatl;
    // var tgll = req.body.tgll;
    // var address = req.body.alamat;
    // var email = req.body.email;
    // var notelp = req.body.notelp;

    // var txtQuerry =`
    // INSERT INTO tab_siswa  (nis, nama_lengkap, kelas, jurusan, tempat_lahir,
    // tanggal_lahir, alamat, email, no_telp) 
    // VALUES (${nis},${fullname},${kelas},${jurusan},${tempatl},
    // ${tgll},${address},${email},${notelp})`;
    
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

    // conn.query('INSERT INTO tab_siswa SET ? ', data, function(err, results, fields){
    //     if(err) res.send(err);
    //     console.log(results);
    //     if(!err){
    //         console.log("saved");
    //     res.redirect('/dashboard');
    //     } 
    // });
    insert.create('INSERT INTO tab_siswa SET ? ', data);
    res.redirect('/dashboard')
    res.end;
});

module.exports = router;