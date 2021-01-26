var express = require('express');
var router = express.Router();
var insert = require('../../controller/crud');

router.get('/',function(req, res){
            res.render('./dataGuru_page/dg_addPage.ejs', {text : "Tambah Data Guru",});
});

router.post('/', function(req, res){
    var data = {
        nik : req.body.nik,
        nama_guru : req.body.nama_guru,
        pendidikan_terakhir : req.body.pendidikan_terakhir,
        jurusan : req.body.jurusan,
        asal_sekolah : req.body.asal_sekolah,
        alamat : req.body.alamat,
        email : req.body.email,
        no_telp : req.body.notelp
    };
            
        insert.create('tab_guru', data);
        res.redirect('/data-guru');
    
});
 
module.exports = router; 