import { Link } from "react-router-dom";
import logo from "../logo.svg";

function SingleProduct(props) {
    return (
   

            <div className="col-12 col-md-3 mb-3">
              <div className="card shadow">
                <Link to="/products/python/1">
                  <img src={logo} className="card-img-top" alt="..." />
                </Link>
                
                <hr/>
                <div className="card-body">
                  <h4 className="card-title">{props.title}</h4>
                  <h5 className="card-title text-muted">Price Rs. 500</h5>
                  <div className="card-footer">
                    
                    <button title="Add to cart" className="btn btn-success btn-sm"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>
                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2"><i className="fa fa-heart" aria-hidden="true"></i></button>
                  </div>
                </div>
              </div>
            </div>
  
    )
}

export default SingleProduct;