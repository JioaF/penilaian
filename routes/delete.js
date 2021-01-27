var express = require('express');
var router = express.Router();
var Deletecrud = require('../controller/crud');

var conn = require('../controller/database');

router.get('/:id', function(req, res){
  
    
    switch (req.baseUrl) {
        case '/data-siswa/delete':
          
            break;

            case '/data-guru/delete':
                Deletecrud('tab_guru', getid);
                res.redirect('/data-guru');
            break;
        
        default:
            break;
    }
});

module.exports = router ;