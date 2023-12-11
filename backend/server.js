const express =require("express");
const app=express();
const productrouter=require("./routes/products.routes");
const mongoose =require("mongoose");
const cors =require("cors");
const categoryRouter=require("./routes/categories.routes");
const loginRouter=require("./routes/login.routes")

const URL="mongodb+srv://sebastien:MG9mdudgNBdZJyd1@cluster0.bgnnhev.mongodb.net/db_catalogue?retryWrites=true&w=majority";

mongoose.connect(URL)
.then(result=>app.listen(5000,(result)=>console.log("server running")))
.catch(error=>console.log(error));
app.use(cors());
app.use(express.json());
app.use("/products",productrouter);
app.use("/categories",categoryRouter)
app.use("/users",loginRouter)