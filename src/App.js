import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from './components/Header'
// 
function App() {
  return (
    <>
      <Header/> 
      <main className="mt-4">
        <div className="container">

          <h3 className="mb-4">Latest Products <a  className="float-end btn btn-sm btn-dark mt-0 " href="#">View all products <i className="fa fa-arrow-right-long mt-2" aria-hidden="true"></i></a></h3>
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



    <h3 className="mb-4">Popular Categories <a  className="float-end btn btn-sm btn-dark mt-0 " href="#">View all Categories <i className="fa fa-arrow-right-long mt-2" aria-hidden="true"></i></a></h3>
          <div className="row">
          {/* Category Box */}

            <div className="col-12 col-md-3 mb-3">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <hr/>
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                  <h5 className="card-title text-muted">Price Rs. 500</h5>
                  <div className="card-footer">
                    
                    Product Downloads: 2344 
                  </div>
                </div>
              </div>
            </div>
          {/* Category Box End*/}
          </div>


          <h3 className="mb-4">Popular Sellers <a  className="float-end btn btn-sm btn-dark mt-0 " href="#">View all Sellers <i className="fa fa-arrow-right-long mt-2" aria-hidden="true"></i></a></h3>
          <div className="row">
          {/* Sellers Box */}

            <div className="col-12 col-md-3 mb-3">
              <div className="card shadow">
                <img src={logo} className="card-img-top" alt="..." />
                <hr/>
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                  <h5 className="card-title text-muted">Price Rs. 500</h5>
                  <div className="card-footer">
                    
                    Categories: <a href="#">Python</a>,<a href="#">PHP</a>
                  </div>
                </div>
              </div>
            </div>
          {/* Sellers Box End*/}
          </div>

          {/* Rating and Reviews */}
          <div id="carouselExample" className="carousel slide bg-dark text-white p-5">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                 <i className="fa fa-star text-warning"></i> 
                 <i className="fa fa-star text-warning"></i> 
                 <i className="fa fa-star text-warning"></i> 
                 <i className="fa fa-star text-warning"></i> 
                 <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
              </div>
              <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
              </div>
              <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Rating and Reviews End */}
          {/*  RatingRatingRatingRatin*/}
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-5">
            <div className="col-md-4 d-flex align-items-center">
              <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
              </a>
              <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">

              <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fa-brands fa-facebook fa-2x"></i></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fa-brands fa-instagram fa-2x"></i></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fa-brands fa-twitter fa-2x"></i></a></li>
              {/* <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li> */}
              {/* <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
            </ul>
          </footer>



        </div>


        
      </main>
    </>
  );
}

export default App;
