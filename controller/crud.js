var conn = require('./database');

module.exports = {
    create : function(table, data){
        conn.query(`INSERT INTO ${table} SET ?`, data, function(err, results, fields){
            if(err) throw(err);
            console.log(results);
            if(!err){
                console.log("saved");
            } 
        });
    },
    delete : function(table, data){ 
        conn.query(`DELETE FROM ${table} WHERE id = ?`, [data], function(err, results, fields){
            if(err ) throw err;
            console.log(results);
            
        });
    },
    update : function(table, data,id){
        conn.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id], function(err, results, fields){
            if (err) {
                throw err;
            }else{
                console.log(results);
            }
        })
    },
    read : function(callback){
        conn.query('SELECT * FROM tab_siswa; SELECT * FROM tab_guru; SELECT * FROM tab_pelajaran; SELECT * FROM tab_nilai_siswa', function(err, results, fields){
            if(err) throw err;
            var dataSiswa = results[0];
            console.log(dataSiswa);
            var dataGuru = results[1];
            var dataPelajaran = results[2];
            var dataNilai = results[3];
            return callback(dataSiswa, dataGuru, dataPelajaran, dataNilai);
        })
    },
    innerJoin : function(callback){
        conn.query(sql, function(err, result, fields) {
            console.log(result)
            return callback(result);
        })
    }
}