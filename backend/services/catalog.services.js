const Product = require("../models/Product") ;
const Category = require("../models/Category") ;


async function findProducts(){
    return await Product.find().populate("category"); 
}

async function findProductsbyId(IdP){
    return await  Product.findById(IdP);
   

}

async function saveProduct(p){
   return await Product.create(req.body);    
    
}

async function removeProductByid(IdP){
  return await Product.findByIdAndDelete(IdP);
}

async function updateProduct(IdP,p){
   return await Product.findByIdAndUpdate(IdP,p);
}
const catalogServices=require("../services/catalog.services");
async function findCategories(){
   return categories=await Category.find();
}

async function saveCategory(req,res){
      return Category.create(req.body);
}



module.exports={findProducts,
                findProductsbyId,
                saveProduct,
                removeProductByid,
                updateProduct,
                findCategories,
                saveCategory
                };