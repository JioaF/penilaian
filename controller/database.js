var mysql = require('mysql');

/**
 * Remember the password && port should be changed for submitting
 * to the teacher
 */

var connection = mysql.createConnection({
    host : 'localhost', 
    user : 'root',
    password : '123456', 
    database : 'db_penilaian_muhammad_salmaan_alfarisi',
    // port : 3306,
    multipleStatements : true 
});

module.exports = connection; 