import { Link, useParams } from "react-router-dom";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";
import { useEffect, useState } from "react";
import axios from 'axios'
//  
function ProductDetail() {
  const baseUrl = 'http://127.0.0.1:8000/api';

const [productData, setProductData]=useState([])
const [productImgs, setProductImgs]=useState([])
const [productTags, setProductTags]=useState([])
const [relatedProducts, setRelatedProducts]=useState([])

const [cartButtonClickStatus, setCartButtonClickStatus]=useState(false)

let {slug,id}= useParams() 
useEffect(()=>{
  fetchData(baseUrl+`/products/${id}/`);
  fetchRelatedData(baseUrl+`/related-products/${id}/`);
  checkProductInCart(id)
},[])
function checkProductInCart(product_id) {
  var previousCart = localStorage.getItem('cartData')
  var cartJson=JSON.parse(previousCart)

  if(cartJson != null){
    cartJson.map((cart, index)=>{
      if(cart!=null && cart.product.id==product_id){
        setCartButtonClickStatus(true) 
  
      }
    })
  
  }

}

function fetchData(baseurl){
  axios.get(baseurl)
  .then((response)=>{
   
    console.log( response.data)
    setProductData(response.data)
    setProductImgs(response.data.product_imgs)
    setProductTags(response.data.tag_list)
    console.log(productImgs)
  }
  )
 
}
console.log(productData)
function fetchRelatedData(baseurl){
  axios.get(baseurl)
  .then((response)=>{
   
    console.log( response.data)
    setRelatedProducts(response.data.results)
   
    console.log(productImgs)
  }
  )
 
}


const cartAddButtonHandler= ()=>{
  var previousCart =  localStorage.getItem('cartData')
  var cartJson=JSON.parse(previousCart)
  const cartData =
    {
      'product':  {
        'id': productData.id,
        'title': productData.title
      },
      'user':{
        'id': 1
      }

    }
    
  
  if(cartJson != null){
    cartJson.push(cartData)

    var cartString = JSON.stringify(cartJson)
    localStorage.setItem('cartData', cartString)
  }else{
    var newCartList = []
    newCartList.push(cartData)
    var cartString = JSON.stringify(newCartList)
    localStorage.setItem('cartData', cartString)
  }

  
  setCartButtonClickStatus(true)

}

const cartRemoveButtonHandler= ()=>{
  var previousCart = localStorage.getItem('cartData')
  var cartJson=JSON.parse(previousCart)

  cartJson.map((cart, index)=>{
    if(cart!=null && cart.product.id==productData.id){
      // delete cartJson[index]
      cartJson.splice(index,1)
    }
  })

  var cartString = JSON.stringify(cartJson)
  localStorage.setItem('cartData', cartString)

  setCartButtonClickStatus(false)
}
  return (
    <section className="container mt-4">
      <div className="row"> 
        <div className="col-4">
        <div id="productThumbnailsSlider" className="carousel carousel-dark slide  border" data-bs-ride="true ">
        <div className="carousel-indicators">
        {
            productImgs.map((image, index)=>{
              if(index===0){
                return <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
              }else{
                return <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
                
              }
            })
          }

        </div>
        <div className="carousel-inner">
        {
            productImgs.map((img, index)=>{
             if (index===0){
              return (
                <div className="carousel-item active">
                  <div className="row">
                    <img src={img.image} className="img-thumbnail mb-5"  alt={index} />
                  </div>
              </div>
              )
             }else{
              return (
                <div className="carousel-item">
                  <div className="row">
                    <img src={img.image} className="img-thumbnail mb-5" alt={index } />
                  </div>
              </div>
              )
             }
            })
          }
        
           
           
            
          </div>
        
        </div>
        </div>
        <div className="col-8">
          <h3>{productData.title} </h3>
          <p>
          {productData.detail}
          </p>
          <h5 className="card-title">Price Rs 500</h5>
          <p className="mt-3">
            <Link title="Add to cart" target="_blank" className="btn btn-dark ms-1"><i className="fa fa-cart-plus" aria-hidden="true"></i> Demo</Link>
          {!cartButtonClickStatus && <Link title="Add to cart" type="button" onClick={cartAddButtonHandler} className="btn btn-primary ms-1"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart</Link>}  
          {cartButtonClickStatus && <Link title="Remove to cart" type="button" onClick={cartRemoveButtonHandler} className="btn btn-warning ms-1"><i className="fa fa-cart-plus" aria-hidden="true"></i> Remove to cart</Link>}  
            <Link title="Add to cart" className="btn btn-success ms-1 "><i className="fa fa-bag-shopping" aria-hidden="true"></i> Buy Now</Link>
            <Link title="Add to Wishlist" className="btn btn-danger ms-1 "><i className="fa fa-heart" aria-hidden="true"></i> Wishlist</Link>
          </p>
          <hr/>
          <div className="producttags">
            <h5 className="mt-3">Tags</h5>
            <p className="mt-3">
              {productTags.map((tag)=>{
                return <Link className="badge bg-secondary text-white me-1" to="">{tag}</Link>
              })}
                
              
            </p>
          </div>
       
        </div>
      </div>
      {/* Related Products */}
      <h3 className="mt-4 mb-2 text-center" >Related Products</h3>
      <div id="productThumbnailsSlider" className="carousel carousel-dark slide  border" data-bs-ride="true ">
        <div className="carousel-indicators">
          {
             relatedProducts.map((image, index)=>{
              if(index===0){
                return <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
              }else{
                return <button type="button" data-bs-target="#productThumbnailsSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
                
              }
            })
          }
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
              {
            relatedProducts.map((related, index)=>{
             if (index===0){
              return (
                <div className="carousel-item active">
                  <div className="row">
                  <SingleProduct product={related}/>
                  </div>
              </div>
              )
             }else{
              return (
                <div className="carousel-item">
                  <div className="row">
                  <SingleProduct product={related}/>

                  </div>
              </div>
              )
             }
            })
          }

              </div>
            </div>
            <div className="carousel-item">
            <div className="row">
                {/* <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/> */}

              </div>
            </div>
            <div className="carousel-item">
            <div className="row">
                {/* <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/>
                <SingleProduct title="Django"/> */}

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
