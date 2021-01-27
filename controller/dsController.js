var input = require('./crud');
var conn = require('./database');



module.exports = {
    dsGet : function (req, res) {
        input.read(function(dataSiswa){
            res.render('./dataSiswa_page/data_siswa',{data : dataSiswa}); 
        });
    },
    dsAddGet: function(req, res) {
        res.render('dataSiswa_page/ds_addPage.ejs', {text : "Tambah Data Siswa",});
    },
    dsAddPost: function (req, res) {
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

        input.create('tab_siswa', data);
        res.redirect('/data-siswa');
    },

    dsEditGet: function (req, res) {
        var getid = req.params.id;
    
            conn.query('SELECT * FROM tab_siswa WHERE id = ?', [getid], function(err, results, fields){
                if(err) throw err;
                res.render('./dataSiswa_page/ds_editPage', {text:"Edit data  Siswa", data:results});   
            });        
    },
    dsEditPost: function (req, res) {
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
    },
    del : function (req, res) {
        var getid = req.params.id;
        input.delete('tab_siswa', getid);
        res.redirect('/data-siswa');
    }

}