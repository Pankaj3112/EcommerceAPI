const express = require('express');
const router = express.Router();

//import the products controller
const productsController = require('../controllers/products_controller');

//see all products
router.get('/' , productsController.getAll);
// create a new product
router.post('/create' , productsController.create);
// delete a product
router.delete('/:id' , productsController.destroy);
// update quantity of product
router.post('/:id/update_quantity/', productsController.update_quantity);

//export the router
module.exports = router;