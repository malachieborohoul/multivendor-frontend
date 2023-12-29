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
import OrderFailure from './components/Customer/OrderFailure';
import Wishlist from './components/Customer/Wishlist';
import Profile from './components/Customer/Profile';
import ChangePassword from './components/Customer/ChangePassword';
import AddressList from './components/Customer/AddressList';
import AddAddress from './components/Customer/AddAddress';


import SellerLogin from './components/Seller/SellerLogin';
import SellerRegister from './components/Seller/SellerRegister';
import SellerDashboard from './components/Seller/SellerDashboard';
import SellerProducts from './components/Seller/SellerProducts';
import AddProduct from './components/Seller/AddProduct';
import Customers from './components/Seller/Customers';
import VendorOrders from './components/Seller/VendorOrders';
import Reports from './components/Seller/Reports';
import VendorChangePassword from './components/Seller/VendorChangePassword';
import VendorProfile from './components/Seller/VendorProfile';
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
        <Route path='/customer/wishlist' element={<Wishlist/>}/>
        <Route path='/customer/profile' element={<Profile/>}/>
        <Route path='/customer/change-password' element={<ChangePassword/>}/>
        <Route path='/customer/addresses' element={<AddressList/>}/>
        <Route path='/customer/add-address' element={<AddAddress/>}/>
        <Route path='/order/success' element={<OrderSuccess/>}/>
        <Route path='/order/fail' element={<OrderFailure/>}/>

        {/* SELLERS */}
        <Route path='/seller/register' element={<SellerRegister/>}/>
        <Route path='/seller/login' element={<SellerLogin/>}/>
        <Route path='/seller/dashboard' element={<SellerDashboard/>}/>
        <Route path='/seller/products' element={<SellerProducts/>}/>
        <Route path='/seller/add-product' element={<AddProduct/>}/>
        <Route path='/seller/orders' element={<VendorOrders/>}/>
        <Route path='/seller/customers' element={<Customers/>}/>
        <Route path='/seller/reports' element={<Reports/>}/>
        <Route path='/seller/change-password' element={<VendorChangePassword/>}/>
        <Route path='/seller/profile' element={<VendorProfile/>}/>



        

         
        
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
