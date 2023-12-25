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
         
        
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
