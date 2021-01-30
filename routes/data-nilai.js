var express = require('express');
var router = express.Router();
var dnController = require('../controller/dnController')

var dnurl = '/data-nilai';

router.route(dnurl).get(dnController.dnGet);

router.route(`${dnurl}/add`).get(dnController.dnAddGet).post(dnController.dnAddPost);

router.route(`${dnurl}/edit/:id`).get(dnController.dnEditGet);

router.route(`${dnurl}/edit/`).post(dnController.dnEditPost)
 
router.route(`${dnurl}/delete/:id`).get(dnController.del);
module.exports = router;