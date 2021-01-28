var input = require('../controller/crud');
var conn = require('./database');

module.exports = {
    dgGet : function(req, res){ 
            input.read(function(undefined, dataGuru){
                res.render('./dataGuru_page/data_guru',{data : dataGuru});
        })
    },
    dgAddGet : function(req, res){
        res.render('./dataGuru_page/dg_Form', {text : "Tambah Data Guru", actionurl:'/data-guru/add'});
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
            if(results.length > 0){
                results.forEach(el => {
                    res.render('./dataGuru_page/dg_Form', 
                    {
                        actionurl : '/data-guru/edit',
                        text:"Edit data  Guru",
                        id : getid,
                        nik : el.nik,
                        nama_guru : el.nama_guru,
                        pendidikan_terakhir : el.pendidikan_terakhir,
                        jurusan : el.jurusan,
                        asal_sekolah : el.asal_sekolah,
                        alamat : el.alamat,
                        email : el.email,
                        no_telp : el.no_telp

                     });   
                });
            }
            
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