var express = require('express');
var router = express.Router();
const productController4 = require('../controllers/productController4');

router.get('/',productController4.index);
router.post('/',productController4.insert);
router.delete('/',productController4.delete);

module.exports = router;