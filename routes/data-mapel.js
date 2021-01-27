var express = require('express');
var router = express.Router();
var dmController = require('../controller/dmController');

var dmurl = '/data-mapel';

router.route(dmurl).get(dmController.dmGet);



module.exports = router;