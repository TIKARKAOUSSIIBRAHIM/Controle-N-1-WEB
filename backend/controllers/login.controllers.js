const loginService= require("../services/login.services");

async function addUser(req,resp){
    try{
        const user=await loginService.saveUser(req.body);
        resp.status(201).json(user);
    }catch(error){
        resp.status(500).json({"erreur":error});
    }
    
}


module.exports={addUser};