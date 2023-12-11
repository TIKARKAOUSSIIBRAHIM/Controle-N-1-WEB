import logo from './logo.svg';
import './App.css';
import { ProductList } from './compenents/compenent.produit.list';
import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './compenents/component.admin.layout';
import { Connexion, SignUp } from './compenents/component.produit.signin';
import { ProductEdit } from './compenents/component.produit.edit';
import { ProductNew } from './compenents/compenets.produit.new';

function App() {
  return (
    <Routes>
        <Route path="/" element={<AdminLayout/>}>
            <Route path='/products' element={<ProductList />}/>
            <Route path="/products/new" element={<ProductNew/>}/>
            <Route path="/connexion" element={<SignUp/>}/>
            <Route path="/products/edit/:id" element={<ProductEdit/>}/>
            

        </Route>
    </Routes>
      
  );
}

export default App;
