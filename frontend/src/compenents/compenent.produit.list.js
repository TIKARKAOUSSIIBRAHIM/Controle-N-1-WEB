import { useEffect, useState } from "react";
import { deleteProductByID, getAllProducts } from "../services/product.services";
import { Link } from "react-router-dom";

export function ProductList(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetchProducts();
    },[])
    
    async function fetchProducts(){
        const res=await getAllProducts()
        setProducts(res.data);
    }
    async function deleteProduct(id){
        const res=await deleteProductByID(id)
        fetchProducts();
    }

    return(
        <>
        <table className="table table-bordered table-striped">
        <thead className="bg-light">
          <tr>
            <th>ID</th>
            <th>Prix</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((elem,index)=><tr key={index}>
          <td>{elem.name}</td>
          <td>{elem.price}</td>
          <td><button className="btn btn-danger" onClick={()=>deleteProduct(elem._id)}>supprimer</button></td>
          <td>
            <button><Link to={`/products/edit/${elem._id}`}>Editer</Link></button>
          </td>
            </tr>)}
        </tbody>
      </table>

      <Link to={"/products/new"}>Nouveau produit</Link>
      </>

    );
}