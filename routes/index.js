const express = require('express');
const router = express.Router();

//sending all requests to /products route, to the products router
router.use('/products', require('./products'));

//exporting the router
module.exports = router;