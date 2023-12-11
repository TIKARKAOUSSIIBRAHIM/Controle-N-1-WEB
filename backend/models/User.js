const mongoose=require("mongoose");

const userMongoose= new mongoose.Schema({
    fName:String,
    lName:String,
    email:String,
    password:String
});


const User=mongoose.model("User",userMongoose);

module.exports=User;