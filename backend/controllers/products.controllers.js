const catalogServices = require("../services/catalog.services") ;

async function getAllProducts(req,res){
   try {
      const products = await catalogServices.findProducts()
      res.json(products);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getProductsbyId(req,res){
    const idP =req.params.id;
    const product= await  catalogServices.findProductsbyId(idP);
    res.json(product)

}

async function addProduct(req,res){
   try{
   const product= await catalogServices.saveCategory(req.body);
   res.status(201).json(product);

}catch(error){
   res.status(500).send("erreur d'ajout");
}
    
}

async function deleteProductByid(req,res){
  const idP =req.params.id;
  const product=await catalogServices.removeProductByid(idP);
  res.json(product);

}

async function updateProduct(req,res){
   const idP =req.params.id;
   
   const product=await catalogServices.updateProduct(idP,req.body);
   res.status(200).json(product);
   

}


module.exports={getAllProducts,
                getProductsbyId,
                addProduct,
                deleteProductByid,
                updateProduct,
                };