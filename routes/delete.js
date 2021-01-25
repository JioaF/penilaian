var express = require('express');
var router = express.Router();
var Deletecrud = require('../controller/crud');

var conn = require('../controller/database');

router.get('/:id', function(req, res){
    var getid = req.params.id;
    
    switch (req.baseUrl) {
        case '/data-siswa/delete':
            Deletecrud.delete('tab_siswa', getid);
            res.redirect('/data-siswa');
            break;
        
        default:
            break;
    }
        
    
    
});

module.exports = router ;