import { NavLink, Outlet } from "react-router-dom";

export function AdminLayout(){

    return(
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar w/ text</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className={"nav-link active"} aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={"nav-link"} to={"/products"}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={"nav-link"} >Categories</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={"nav-link"} to={"/connexion"}>Connexion</NavLink>
                        </li>
                    </ul>
                    
                    </div>
                </div>
          </nav>
          <div className="container mt-5 ">
          <Outlet/>  
          </div>
          
        </>
    )
}