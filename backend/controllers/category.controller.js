const catalogServices=require("../services/catalog.services");
async function getAllCategories(req,res){
    try{      
        const categories = await catalogServices.findCategories();
        res.status(200).json(categories);

    }catch(error){
        res.status(500).send("erreur dans le serveur");
    }
}

async function addCategory(req,res){
   try{
       const cat=await catalogServices.saveCategory(req.body);
       res.status(201).json({message:"category ajouter"})
   }catch(error){
    res.status(500).send("erreur dans le serveur");
   }

}

module.exports={getAllCategories,addCategory}