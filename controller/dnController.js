var conn = require('./database')
var input = require('./crud');
var excel = require('xlsx');
var filesaver = require('file-saver');
const FileSaver = require('file-saver');


var sql = `SELECT 
        tab_nilai_siswa.id,
        tab_siswa.nis, 
        tab_siswa.nama_lengkap, 
        tab_siswa.kelas, 
        tab_siswa.jurusan, 
        tab_pelajaran.mata_pelajaran, 
        tab_nilai_siswa.nilai_uh, 
        tab_nilai_siswa.nilai_uts, 
        tab_nilai_siswa.nilai_uas, 
        tab_nilai_siswa.rata_rata, 
        tab_nilai_siswa.predikat 
      FROM 
        (
          (
            tab_nilai_siswa 
            INNER JOIN tab_siswa ON tab_nilai_siswa.id_siswa = tab_siswa.id
          ) 
          INNER JOIN tab_pelajaran ON tab_nilai_siswa.id_matapelajaran = tab_pelajaran.id
        )`;

        function average(uh, uts, uas) {
            var n = (uh + uts + uas)/3;
            
            return n;
        }

function pred(value){
    
    var s;
    if(value >= 80 || value == 100){ 
        s = "A"
    }else if(value >= 61 || value == 79) {
        s = "B"
    }else if(value >= 41 || value == 60){
        s = "C"
    }else if(value >= 0 || value == 40){
        s = "D"
    }

    return s;
    
}


module.exports = {
    dnGet : function(req, res){
        conn.query(sql, function(err, result, fields ){
            res.render('./dataNilai_page/data-nilai', {datajoin:result});
        });
        
    },
    dnAddGet : function(req, res){
        input.read(function(ds, dg, dm, dns){
            res.render('./dataNilai_page/dn_Form', 
            {
                header : 'Tambah Nilai',
                actionurl:req.url, 
                dataSiswa : ds,
                dataPelajaran : dm,
            });
            })
    },
    dnAddPost: function(req, res){
        var data = {
            id_siswa : req.body.nama_lengkap,
            id_matapelajaran : req.body.mata_pelajaran,
            nilai_uh  :req.body.nilai_uh,
            nilai_uts : req.body.nilai_uts,
            nilai_uas : req.body.nilai_uas,
            rata_rata : average(parseFloat(req.body.nilai_uh), parseFloat(req.body.nilai_uts), parseFloat(req.body.nilai_uas)),
            predikat : pred(average(parseFloat(req.body.nilai_uh), parseFloat(req.body.nilai_uts), parseFloat(req.body.nilai_uas)))
        }        

            input.create('tab_nilai_siswa', data);
            res.redirect('/data-nilai');
    },
    dnEditGet : function(req, res){
        var getid = req.params.id;
        conn.query(`SELECT * FROM tab_nilai_siswa WHERE id = ?`, [getid], function (err, result, fields) {
            if(err) throw err;
            if(result.length > 0){
                result.forEach(el => {
                    input.read(function(ds, dg, dm, dns){
                        res.render('./dataNilai_page/dn_Form', 
                        {
                            header : 'Edit Nilai',
                            actionurl:'/data-nilai/edit', 
                            dataSiswa : ds,
                            dataPelajaran : dm,
                            id : getid,
                            id_siswa : el.id_siswa,
                            id_matapelajaran : el.id_matapelajaran,
                            nilai_uh : el.nilai_uh,
                            nilai_uts : el.nilai_uts,
                            nilai_uas : el.nilai_uas,
                        });
                        })        
                });
            }
                
        });
    },
    dnEditPost : function(req, res){
        //now its working
        var upid = req.body.id

        var data = {
            id_siswa : req.body.nama_lengkap,
            id_matapelajaran : req.body.mata_pelajaran,
            nilai_uh  :req.body.nilai_uh,
            nilai_uts : req.body.nilai_uts,
            nilai_uas : req.body.nilai_uas,
            rata_rata : average(parseFloat(req.body.nilai_uh), parseFloat(req.body.nilai_uts), parseFloat(req.body.nilai_uas)),
            predikat : pred(average(parseFloat(req.body.nilai_uh), parseFloat(req.body.nilai_uts), parseFloat(req.body.nilai_uas)))
        }        
            input.update('tab_nilai_siswa', data, upid);
            res.redirect('/data-nilai');
    },

    del : function (req, res) {
        var getid = req.params.id;
        input.delete('tab_nilai_siswa', getid);
        res.redirect('/data-nilai'); 
    },
    // excelgen : function (req, res) {
        
    //     // wb.Props = {
    //     //     Title : 'Data Nilai',
    //     //     Subject : 'Test',
    //     //     Author : 'admin',
    //     //     CreatedDate : new Date(),
    //     // };
        
    //     conn.query(sql, function (err, result, fields) {
    //         if(err)throw err;
    //         try {

    //             var ws_data = JSON.stringify(result);

    //             var ws = excel.utils.json_to_sheet(ws_data); 
                
    //             var wb = excel.utils.book_new();
    //             excel.utils.book_append_sheet(wb, ws, "Data Nilai");

    //             var wbout = excel.write(wb, 
    //                 {
    //                     bookType:'xlsx', 
    //                     type :'binary'
    //                 });
                
    //             function s2ab(s) {
    //                 var buf = new ArrayBuffer(s.length);
    //                 var view = new Uint8Array(buf);
    //                 for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    //                 return buf;
    //               }

    //               saveAs(new Blob([s2ab(wbout)], {
    //                 type: "application/octet-stream"
    //               }), "sheetjs.xlsx");
                  
    //             // res.redirect('/data-nilai')

    //         } catch (error) {
    //             console.log(error);
    //         }
             
    //     });
    // }
};