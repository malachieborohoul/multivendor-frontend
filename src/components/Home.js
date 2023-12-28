import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Categories from "./Categories";
import SingleProduct from "./SingleProduct";

function Home(){

  const products =[
    {
      'title':'Product1',
      'price':100
    },
    {
      'title':'Product2',
      'price':100
    }
  ]
    return(
        <main className="mt-4"> 
        <div className="container">

          <h3 className="mb-4">Latest Products <Link  className="float-end btn btn-sm btn-dark mt-0 " to="/products">View all products <i className="fa fa-arrow-right-long mt-2" aria-hidden="true"></i></Link></h3>
          <div className="row">
          {/* Product Box */}
            {products.map((product)=>{
             return  <SingleProduct product={product}  />
            })}
            
          {/* Product Box End*/}


          
            
          </div>



        <Categories/>

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
         



        </div>


        
      </main>
    )
}

export default Home