var express = require('express');
var router = express.Router();
var conn = require('../../controller/database');
var input = require('../../controller/crud');


router.get('/:id',function(req, res){
    var getid = req.params.id;
    
            conn.query('SELECT * FROM tab_guru WHERE id = ?', [getid], function(err, results, fields){
                if(err) throw err;
                        res.render('./dataGuru_page/dg_editPage', 
                        {
                            text:"Edit data  Guru",
                            data:results
                        });   
            });        
    
});

router.post('/',function(req, res){
    var upid = req.body.id;
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

            input.update('tab_siswa', data, upid);
            res.redirect('/data-siswa');       
    
});

module.exports = router;