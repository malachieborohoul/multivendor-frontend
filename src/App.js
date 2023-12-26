import {Routes, Route, Link} from 'react-router-dom'

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from './components/Header'
import Home from "./components/Home";
import Footer from "./components/Footer";
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Login from './components/Customer/Login';
import Register from './components/Customer/Register';
import Dashboard from './components/Customer/Dashboard';
import Orders from './components/Customer/Orders';
import OrderSuccess from './components/Customer/OrderSuccess';
// 
function App() {
  return (
    <>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/:slug/:id' element={<CategoryProducts/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:slug/:id' element={<ProductDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/customer/register' element={<Register/>}/>
        <Route path='/customer/login' element={<Login/>}/>
        <Route path='/customer/dashboard' element={<Dashboard/>}/>
        <Route path='/customer/orders' element={<Orders/>}/>
        <Route path='/order/success' element={<OrderSuccess/>}/>
        

         
        
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
