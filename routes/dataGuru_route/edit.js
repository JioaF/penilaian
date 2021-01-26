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

        nik : req.body.nik,
        nama_guru : req.body.nama_guru,
        pendidikan_terakhir : req.body.pendidikan_terakhir,
        jurusan : req.body.jurusan,
        asal_sekolah : req.body.asal_sekolah,
        alamat : req.body.alamat,
        email : req.body.email,
        no_telp : req.body.notelp
    };
            input.update('tab_guru', data, upid);
            res.redirect('/data-guru');       
    
});

module.exports = router;