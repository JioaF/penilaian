var express = require('express');
var router = express.Router();
var dmController = require('../controller/dmController');

var dmurl = '/data-mapel';

router.route(dmurl).get(dmController.dmGet);

router.route(`${dmurl}/add`).get(dmController.dmAddGet).post(dmController.dmAddPost); 

router.route(`${dmurl}/edit/:id`).get(dmController.dmEditGet);

router.route(`${dmurl}/edit`).post(dmController.dmEditPost);

router.route(`${dmurl}/delete/:id`).get(dmController.del);


module.exports = router;