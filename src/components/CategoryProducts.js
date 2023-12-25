import { Link } from "react-router-dom";
import logo from "../logo.svg";

function CategoryProducts(params) {
    return (
    <section className="container mt-4">
        <h3 className="mb-4">Category Product List </h3>
      <div className="row">
      {/* Category Box */}

        <div className="col-12 col-md-3 mb-3">
          <div className="card shadow">
            <img src={logo} className="card-img-top" alt="..." />
            <hr/>
            <div className="card-body">
              <h4 className="card-title"><Link  to="">Category title</Link></h4>
              <h5 className="card-title text-muted">Price Rs. 500</h5>
              <div className="card-footer">
                
                Product Downloads: 2344 
              </div>
            </div>
          </div>
        </div>
      {/* Category Box End*/}
      </div>
    </section>
    )
}

export default CategoryProducts;