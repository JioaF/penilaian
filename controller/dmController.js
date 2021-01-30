var input = require('./crud');
var conn = require('./database');

module.exports = {
    dmGet : function(req, res){
        input.read(function(undefined, dataGuru, dataMapel){
            res.render('./dataPelajaran_page/dataMapel',{data : dataMapel});
    });
    },
    dmAddGet : function(req, res){
        res.render('./dataPelajaran_page/mapelForm', {actionurl:req.url, header:'Tambah Data'});
    },
    dmAddPost : function(req, res){
        var data = {
           mata_pelajaran : req.body.mapel,
           jurusan : req.body.jurusan,
           kelas : req.body.kelas
        };

        input.create('tab_pelajaran', data);
        res.redirect('/data-mapel');
    },
    dmEditGet: function(req, res){
        var getid = req.params.id;

        conn.query('SELECT * FROM tab_pelajaran WHERE id= ?', [getid], function(err, results, fields){
            if(err) throw err;
            if (results.length > 0) {
                results.forEach(el => {
                    res.render('./dataPelajaran_page/mapelForm', {
                        actionurl:'/data-mapel/edit', 
                        header : 'Edit Pelajaran',
                        id : getid,
                        mapel : el.mata_pelajaran,
                        jurusan : el.jurusan,
                        kelas : el.kelas
                    });            
                });
            }
        });
        
    },
    dmEditPost : function(req, res){
        var upid = req.body.id;
        var data = {
            mata_pelajaran : req.body.mapel,
            jurusan : req.body.jurusan,
            kelas : req.body.kelas
         };

         input.update('tab_pelajaran', data, upid);
         res.redirect('/data-mapel');
    },
    del : function(req, res){
        var getid = req.params.id;
        input.delete('tab_pelajaran', getid);
        res.redirect('/data-mapel');
    },
}