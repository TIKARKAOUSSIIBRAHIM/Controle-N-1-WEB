const express= require("express");
const productController=require("../controllers/products.controllers");
const router=express.Router();


//form-data

router.get("/",productController.getAllProducts);
router.get("/:id",productController.getProductsbyId);
router.post("/",productController.addProduct);
router.delete("/:id",productController.deleteProductByid);
router.patch("/:id",productController.updateProduct);
module.exports=router 