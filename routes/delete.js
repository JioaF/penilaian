var express = require('express');
var router = express.Router();
var Deletecrud = require('../controller/crud');

var conn = require('../controller/database');

router.get('/:id', function(req, res){
    var getid = req.params.id;
    Deletecrud.delete('tab_siswa', getid);
    console.log(req.params.id);
    res.redirect('/dashboard');
});

module.exports = router ;