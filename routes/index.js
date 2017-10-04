var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const coinController = require('../controllers/coinController');

router.get('/', indexController.index);

router.get('/:limit([0-9]+)', indexController.index);

router.get('/:coin([A-Za-z]+)', coinController.index);

module.exports = router;
