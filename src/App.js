import {Routes, Route, Link} from 'react-router-dom'

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from './components/Header'
import Home from "./components/Home";
import Footer from "./components/Footer";
// 
function App() {
  return (
    <>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
         
        
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
