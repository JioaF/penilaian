var express = require('express');
var router = express.Router();
var Deletecrud = require('../controller/crud');

var conn = require('../controller/database');

router.get('/:id', function(req, res){
    var getid = req.params.id;
    Deletecrud.delete('DELETE FROM tab_siswa WHERE id = ?', getid);
    // conn.query('DELETE FROM tab_siswa WHERE id = ?', [getid], function(err, results, fields){
    //     if(err ) throw err;
    //     console.log(results);
        
    // });
    console.log(req.params.id);
    res.redirect('/dashboard');
});

module.exports = router ;