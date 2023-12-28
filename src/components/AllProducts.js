import { Link } from "react-router-dom";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";
import { useEffect, useState } from "react";

function AllProducts(params) {
  let products=[
    {
      "title":"Python",
      "price":100
    },
    {
      "title":"Django",
      "price":120
    }
]

const [Products, setProducts]=useState([])

useEffect(()=>{
  fetchData('http://localhost:8000/api/products/');
})

function fetchData(baseUrl){
  fetch(baseUrl)
  .then((response)=>response.json())
  .then((data)=>setProducts(data.results))
}
    return (
    <section className="container mt-4">
        <h3 className="mb-4"><span className="text-success">Python</span> Products</h3>
      <div className="row">
            {/* Product Box */}
          {Products.map((product)=>{
            return <SingleProduct product={product}/>
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
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
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