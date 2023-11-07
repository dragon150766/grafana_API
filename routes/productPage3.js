var express = require('express');
var router = express.Router();
const productController3 = require('../controllers/productController3');

router.get('/',productController3.index);
router.post('/',productController3.insert);

module.exports = router;