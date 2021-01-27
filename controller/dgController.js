var input = require('../controller/crud');
var conn = require('./database');

module.exports = {
    dgGet : function(req, res){ 
            input.read(function(undefined, dataGuru){
                res.render('./dataGuru_page/data_guru',{data : dataGuru});
        })
    },
    dgAddGet : function(req, res){
        res.render('./dataGuru_page/dg_addPage.ejs', {text : "Tambah Data Guru",});
    },
    dgAddPost : function(req, res){
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
                
            input.create('tab_guru', data);
            res.redirect('/data-guru');
    },

    dgEditGet : function(req, res){
        var getid = req.params.id;
        
                conn.query('SELECT * FROM tab_guru WHERE id = ?', [getid], function(err, results, fields){
                    if(err) throw err;
                            res.render('./dataGuru_page/dg_editPage', 
                            {
                                text:"Edit data  Guru",
                                data:results
                            });   
                });        
        
    },
    dgEditPost : function(req, res){
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
    },

    del: function (req, res) {
        var getid = req.params.id;
        input.delete('tab_guru', getid);
        res.redirect('/data-guru');
    }


};