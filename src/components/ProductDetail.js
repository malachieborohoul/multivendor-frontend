import { Link } from "react-router-dom";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";

function ProductDetail(props) {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
        <div id="productThumbnailsSlider" className="carousel carousel-dark slide  border" data-bs-ride="true ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
              <img src={logo} className="img-thumbnail mb-5" alt="..." />
               

              </div>
            </div>
            <div className="carousel-item">
            <div className="row">
            <img src={logo} className="img-thumbnail mb-5" alt="..." />
              

              </div>
            </div>
            <div className="carousel-item">
            <div className="row">
            <img src={logo} className="img-thumbnail mb-5" alt="..." />
                

              </div>
            </div>
          </div>
        
        </div>
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
            <Link title="Add to cart" target="_blank" className="btn btn-dark ms-1"><i className="fa fa-cart-plus" aria-hidden="true"></i> Demo</Link>
            <Link title="Add to cart" className="btn btn-primary ms-1"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart</Link>
            <Link title="Add to cart" className="btn btn-success ms-1 "><i className="fa fa-bag-shopping" aria-hidden="true"></i> Buy Now</Link>
            <Link title="Add to Wishlist" className="btn btn-danger ms-1 "><i className="fa fa-heart" aria-hidden="true"></i> Wishlist</Link>
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
      {/* Related Products */}
      <h3 className="mt-4 mb-2" >Related Products</h3>
      <div id="productThumbnailsSlider" className="carousel carousel-dark slide  border" data-bs-ride="true ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>

              </div>
            </div>
            <div className="carousel-item">
            <div className="row">
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>

              </div>
            </div>
            <div className="carousel-item">
            <div className="row">
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>

              </div>
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
    </section>
  );
}

export default ProductDetail;
