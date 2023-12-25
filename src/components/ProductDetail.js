import { Link } from "react-router-dom";
import logo from "../logo.svg";

function ProductDetail(props) {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <img src={logo} className="card-img-top" alt="..." />
        </div>
        <div className="col-8">
          <h3>Product Title</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <h5 className="card-title">Price Rs 500</h5>
          <p className="mt-3">
            <button title="Add to cart" className="btn btn-primary btn-sm"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart</button>
            <button title="Add to cart" className="btn btn-success btn-sm ms-2"><i className="fa fa-bag-shopping" aria-hidden="true"></i> Buy Now</button>
            <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2"><i className="fa fa-heart" aria-hidden="true"></i> Wishlist</button>
          </p>
          <hr/>
          <div className="producttags">
            <h5 className="mt-3">Tags</h5>
            <p className="mt-3">
                <Link className="badge bg-secondary text-white me-1" to="">python</Link>
                <Link className="badge bg-secondary text-white me-1" to="">php</Link>
                <Link className="badge bg-secondary text-white me" to="">java</Link>
              
            </p>
          </div>
       
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
