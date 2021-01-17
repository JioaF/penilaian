var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.redirect('https://expressjs.com/');
});


module.exports = router;