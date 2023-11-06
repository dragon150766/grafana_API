var express = require('express');
var router = express.Router();
const productController2 = require('../controllers/productController2');

router.get('/',productController2.index);
router.post('/',productController2.insert);

module.exports = router;