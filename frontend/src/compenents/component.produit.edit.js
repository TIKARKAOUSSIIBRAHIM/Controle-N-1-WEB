import { useEffect, useState } from "react";
import { addProduct, getProductsById, updateProduct } from "../services/product.services";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ProductEdit(){
    const [name,setName]=useState("");
    const [price, setPrice] = useState(0);
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect( ()=>{
      fetchProduct();
    },[]

    );

    async function fetchProduct(){

     const resp = await getProductsById(id);
     
     const p=resp.data;
     setName(p.name);
     setPrice(p.price);
    }

    async function handlForm(event){
        event.preventDefault();
        const p={"_id":id,"name":name,"price":price}
        await updateProduct(p);
        navigate("/products");
    }

    return(
        <>
        <form onSubmit={(e)=>handlForm(e)}>
        <label className="form-label" htmlFor="name">Nom :</label>
        <input className="form-control" type='text'  id='name' value={name} onChange={(e)=>setName(e.target.value)} />
        <br/>
        <label className="form-label" htmlFor="price">Prix :</label>
        <input className="form-control" type='number'  id='price=' value={price} onChange={(e)=>setPrice(e.target.value)} />
        <br/>
        <input className="btn btn-primary" type="submit" value={"Enregistrer"} />
        <input className="btn btn-danger" type="reset" value={"Annuler"} /> 
        </form>

        </>
        );
}