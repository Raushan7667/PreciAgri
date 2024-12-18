const express=require("express");
const router=express.Router();
const productController=require("../controllers/product.controller.js");
const authenticate = require("../middleware/authenticat.js");

// router.post('/uploadimage',productController.uploadImageOfProduct);
router.post('/',authenticate, productController.createProduct);
router.post('/creates', productController.createMultipleProduct);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', productController.updateProduct);

module.exports=router;