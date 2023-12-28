import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useEffect, useState } from "react";

function Categories() {
  const baseUrl = 'http://localhost:8000/api';

  const [categories, setCategories]=useState([])
  const [totalResults, setTotalResults]=useState(0)

  useEffect(()=>{
    fetchData(baseUrl+'/categories/');
  },[])

  function fetchData(baseurl){
    fetch(baseurl)
    .then((response)=>response.json())
    .then((data)=>{
      setCategories(data.results)
      setTotalResults(data.count)
    })
  }

  function changeUrl (baseurl) { 
    fetchData(baseurl)
   }
  const links= [];
  for (let i =0 ;i<totalResults; i++){
    links.push( <li class="page-item"><Link onClick={()=>{changeUrl(baseUrl+`/categories/?page=${i+1}`)}} to={`/categories/?page=${i+1}`} class="page-link" href="#">{i+1}</Link></li>)
  }
    return (
    <section className="container mt-4">
        <h3 className="mb-4">Popular Categories </h3>
      <div className="row">
      {/* Category Box */}

      {categories.map((category)=>{
        return (
          <div className="col-12 col-md-3 mb-3">
          <div className="card shadow">
            <img src={logo} className="card-img-top" alt="..." />
            <hr/>
            <div className="card-body">
              <h4 className="card-title"><Link  to={`/categories/${category.title}/${category.id}`}>{category.title}</Link></h4>
              <h5 className="card-title text-muted">Price Rs. 500</h5>
              <div className="card-footer">
                
                Product Downloads: 2344 
              </div>
            </div>
          </div>
        </div>
        )
      })}

        
      {/* Category Box End*/}
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

export default Categories;