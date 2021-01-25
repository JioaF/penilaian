var express  = require('express');
var router = express.Router();
var input = require('../../controller/crud');

router.get('/',function(req, res){
    input.read(function(undefined, dataGuru){
        res.render('./dataGuru_page/data_guru',{data : dataGuru});
    })
    
});

module.exports = router;