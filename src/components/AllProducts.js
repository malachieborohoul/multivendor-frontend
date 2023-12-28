import { Link } from "react-router-dom";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";
import { useEffect, useState } from "react";

function AllProducts(params) {
//   let products=[
//     {
//       "title":"Python",
//       "price":100
//     },
//     {
//       "title":"Django",
//       "price":120
//     }
// ]
const baseUrl = 'http://localhost:8000/api';

const [products, setProducts]=useState([])
const [totalResults, setTotalResults]=useState(0)

useEffect(()=>{
  fetchData(baseUrl+'/products/');
},[])

function fetchData(baseurl){
  fetch(baseurl)
  .then((response)=>response.json())
  .then((data)=>{
    setProducts(data.results)
    setTotalResults(data.count)
  })
}

function changeUrl (baseurl) { 
  fetchData(baseurl)
 }
const links= [];
for (let i =0 ;i<totalResults; i++){
  links.push( <li class="page-item"><Link onClick={()=>{changeUrl(baseUrl+`/products/?page=${i+1}`)}} to={`/products/?page=${i+1}`} class="page-link" href="#">{i+1}</Link></li>)
}


    return (
    <section className="container mt-4">
        <h3 className="mb-4"><span className="text-success">Python</span> Products</h3>
      <div className="row">
            {/* Product Box */}
          {products.map((product)=>{
            return <SingleProduct  product={product}/>
          })}
           
          
          {/* Product Box End*/} 
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {links}

          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
    )
}

export default AllProducts;