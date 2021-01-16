var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'db_penilaian_muhammad_salmaan_alfarisi'
});

module.exports = connection;