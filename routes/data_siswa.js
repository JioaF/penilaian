var express = require('express');
var router = express.Router();
var dsController = require('../controller/dsController');

var dsurl = '/data-siswa';

router.route(dsurl)
.get(dsController.dsGet);

router.route(`${dsurl}/add`)
.get(dsController.dsAddGet).post(dsController.dsAddPost);

router.route(`${dsurl}/edit/:id`).get(dsController.dsEditGet);

router.route(`${dsurl}/edit`).post(dsController.dsEditPost);

router.route(`${dsurl}/delete/:id`).get(dsController.del);

module.exports = router;