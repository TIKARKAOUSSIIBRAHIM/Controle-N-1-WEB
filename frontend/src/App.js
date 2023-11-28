import logo from './logo.svg';
import './App.css';
import { ProductList } from './compenents/compenent.produit.list';
import { ProductAddForm } from './compenents/compenets.produit.add';
import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './compenents/component.admin.layout';
import { Connexion } from './compenents/component.produit.conn';

function App() {
  return (
    <Routes>
        <Route path="/" element={<AdminLayout/>}>
            <Route path='/products' element={<ProductList />}/>
            <Route path=":products/new" element={<ProductAddForm/>}/>
            <Route path="/connexion" element={<Connexion/>}/>
            

        </Route>
    </Routes>
      
  );
}

export default App;
