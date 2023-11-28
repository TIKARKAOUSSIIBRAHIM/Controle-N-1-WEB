const Product = require("../models/Product") ;

async function getAllProducts(req,res){
     const products = await Product.find();
     res.json(products);
}

async function getProductsbyId(req,res){
    const idP =req.params.id;
    const product= await  Product.findById(idP);
    res.json(product)

}

async function addProduct(req,res){
   const product= await Product.create(req.body);    
   res.json(product);
    
}

async function deleteProductByid(req,res){
  const idp =req.params.id;
  const product=await Product.findByIdAndDelete(idp);
  res.json(product);

}

async function updateProduct(req,res){
   const idP =req.params.id;
   const product=await Product.findByIdAndUpdate(idP,req.body);
   res.json(product);

}


module.exports={getAllProducts,
                getProductsbyId,
                addProduct,
                deleteProductByid,
                updateProduct,
                };