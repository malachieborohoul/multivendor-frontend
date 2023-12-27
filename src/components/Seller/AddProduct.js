import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import SellerSidebar from "./SellerSidebar";

function AddProduct(props) {
    return (
      <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
            <h3 className="mb-4">AddProduct</h3>
            <form>
                <div className="mb-3">
                  <label for="title" className="form-label">Category</label>
                  <select className="form-control">
                    <option>Python</option>
                    <option>Php</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title"/>

                </div>

                <div className="mb-3">
                  <label for="price" className="form-label">Price</label>
                  <input type="number" className="form-control" id="price"/>

                </div>

                <div className="mb-3">
                  <label for="description" className="form-label">Description</label>
                  <textarea type="text" className="form-control" id="description" aria-describedby="emailHelp"></textarea>
                </div>

                <div className="mb-3">
                  <label for="image" className="form-label">Product image</label>
                  <input type="file" className="form-control" id="password"/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
      </div>
    </div>
   

          
  
    )
}

export default AddProduct;