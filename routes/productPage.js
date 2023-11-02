var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/',productController.index);
router.post('/',productController.insert);

module.exports = router;