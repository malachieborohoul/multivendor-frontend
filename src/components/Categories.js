import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Categories(params) {
    return (
    <section className="container mt-4">
        <h3 className="mb-4">Popular Categories </h3>
      <div className="row">
      {/* Category Box */}

        <div className="col-12 col-md-3 mb-3">
          <div className="card shadow">
            <img src={logo} className="card-img-top" alt="..." />
            <hr/>
            <div className="card-body">
              <h4 className="card-title"><Link  to="/categories/python/1">Python</Link></h4>
              <h5 className="card-title text-muted">Price Rs. 500</h5>
              <div className="card-footer">
                
                Product Downloads: 2344 
              </div>
            </div>
          </div>
        </div>
      {/* Category Box End*/}
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

export default Categories;