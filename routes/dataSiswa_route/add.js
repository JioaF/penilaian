var express = require('express');
var router = express.Router();
var insert = require('../../controller/crud');

router.get('/',function(req, res){
            res.render('dataSiswa_page/ds_addPage.ejs', {text : "Tambah Data Siswa",});
});

router.post('/', function(req, res){
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
            
        insert.create('tab_siswa', data);
        res.redirect('/data-siswa');
    
});
 
module.exports = router;