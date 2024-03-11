import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Shop from  "../src/Pages/Shop";
import ShopCategory from  "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category = "mens"/>}/>
      <Route path='/womens' element={<ShopCategory category = "womens"/>}/>
      <Route path='/kids' element={<ShopCategory category = "kids"/>}/>
      <Route path='/products' element={<Product/>}/>

      <Route path=':productId' element={<Product/>}>

      </Route>
      <Route path='/cart' element={<cart/>}/>
    </Routes>
    </BrowserRouter>
    
  </div>
);
