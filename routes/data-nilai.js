var express = require('express');
var router = express.Router();
var dnController = require('../controller/dnController')

router.route('/data-nilai').get(dnController.dnGet);

router.route('/data-nilai/add').get(dnController.dnAddGet);

module.exports = router;