import { Link } from "react-router-dom";
import logo from "../logo.svg";

function CategoryProducts(params) {
    return (
    <section className="container mt-4">
        <h3 className="mb-4"><span className="text-danger">Python</span> Products</h3>
      <div className="row">
            {/* Product Box */}

            <div className="col-12 col-md-3 mb-3">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <hr/>
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price Rs. 500</h5>
                  <div className="card-footer">
                    
                    <button title="Add to cart" className="btn btn-success btn-sm"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>
                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2"><i className="fa fa-heart" aria-hidden="true"></i></button>
                  </div>
                </div>
              </div>
            </div>
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

export default CategoryProducts;