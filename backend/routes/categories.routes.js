const express= require("express");
const categoryController=require("../controllers/category.controller");
const router=express.Router();


router.route("/").get(categoryController.getAllCategories)
.post(categoryController.addCategory)

module.exports=router
