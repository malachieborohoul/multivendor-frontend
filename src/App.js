import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from './components/Header'
import Home from "./components/Home";
// 
function App() {
  return (
    <>
      <Header/> 
      <Home/>
    </>
  );
}

export default App;
