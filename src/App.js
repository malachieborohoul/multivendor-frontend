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
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/* Rating and Reviews End */}



        </div>


        
      </main>
    </>
  );
}

export default App;
