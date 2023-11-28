import { useState } from "react";
import { addProduct } from "../services/product.services";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ProductAddForm(){
    const [name,setName]=useState("");
    const [price, setPrice] = useState(0);
    const navigate=useNavigate();
    function handlForm(event){
        event.preventDefault();
        const p={"name":name,"price":price}
        addProduct(p);
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
        <input className="btn btn-primary" type="submit" value={"Enregistrer"} />
        <input className="btn btn-danger" type="reset" value={"Annuler"} /> 
        </form>

        </>
        );
}