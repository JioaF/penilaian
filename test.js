var conn = require('./controller/database');


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
        )`



var nama_lengkap = 'desi';
var mapel = 'Pemrograman Web';
conn.query(sql, function(err, results, fields){
        console.log(results);
})

// function pred(value){
    
//     var s;
//     if(value >= 80 || value == 100){ 
//         s = "A"
//     }else if(value >= 61 || value == 79) {
//         s = "B"
//     }else if(value >= 41 || value == 60){
//         s = "C"
//     }else if(value >= 0 || value == 40){
//         s = "D"
//     }

//     return s;
    
// }

// console.log(pred(80))
