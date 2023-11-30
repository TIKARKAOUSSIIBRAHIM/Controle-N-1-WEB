import { useEffect, useState } from "react";
import { addProduct } from "../services/product.services";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../services/categorie.service";

export function ProductNew(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [selectedCat,setSelectedCat]= useState(0);
    const [categories, setCategories]=useState([]);
     
    
    const navigate=useNavigate();
    useEffect(()=>{
        fetchCategories()
        }
    ,[]);
    async function fetchCategories(){
        const res=await getAllCategories();
        setCategories(res.data.categories);

    }
    async function handlForm(event){
        event.preventDefault(); 
        const p={"name":name,"price":price, "category":categories[selectedCat]}
        await addProduct(p);
        navigate("/products");
      
      }
    return(
        <>
        <form onSubmit={(e)=>handlForm(e)}>
        <label className="form-label" htmlFor="name">Nom :</label>
        <input className="form-control" type='text'  id='name' onChange={(e)=>setName(e.target.value)} />
        <br/>
        <label className="form-label" htmlFor="price">Prix :</label>
        <input className="form-control" type='number'  id='price=' onChange={(e)=>setPrice(e.target.value)} />
        <br/>
        <label className="form-label" >Catégorie :</label>
        <select className="form-control" onChange={(e)=>setSelectedCat(e.target.value)}>
        {categories.map((category,index)=><option key={index} value={index}>{category.name}</option>)}
        </select>


        <input className="btn btn-primary" type="submit" value={"Enregistrer"} />
        <input className="btn btn-danger" type="reset" value={"Annuler"} /> 
        </form>

        </>
        );
}