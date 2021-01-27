var express  = require('express');
var router = express.Router();
var dgController = require('../controller/dgController');

var dgurl = '/data-guru'

router.route(dgurl).get(dgController.dgGet);

router.route(`${dgurl}/add`).get(dgController.dgAddGet).post(dgController.dgAddPost);

router.route(`${dgurl}/edit/:id`).get(dgController.dgEditGet);

router.route(`${dgurl}/edit`).post(dgController.dgEditPost);

router.route(`${dgurl}/delete/:id`).get(dgController.del);
module.exports = router;