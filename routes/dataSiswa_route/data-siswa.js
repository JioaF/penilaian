var express = require('express');
var router = express.Router();
var conn = require('../../controller/database');
var input = require('../../controller/crud');

router.get('/',function(req, res){
    input.read(function(dataSiswa){
        res.render('./dataSiswa_page/data_siswa',{data : dataSiswa}); 
    });

});

module.exports = router;