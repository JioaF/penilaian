var express = require('express');
var router = express.Router();
var conn = require('../controller/database');


router.get('/:id',function(req, res){
    var getid = req.params.id;

   var data = {};
    
    conn.query('SELECT * FROM tab_siswa WHERE id = ?', [getid], function(err, results, fields){
        if(err) throw err;
        
            
        res.render('edit_page', {text:"Edit data  Siswa", data:results});          
    });
})

module.exports = router;