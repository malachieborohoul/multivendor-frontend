import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Sidebar from "./Sidebar";

function AddAddress(props) {
    return (
      <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
            <h3 className="mb-4">Add Address</h3>
            <form>
                <div className="mb-3">
                  <label for="address" className="form-label">Address</label>
                  <textarea type="text" className="form-control" id="address" aria-describedby="emailHelp"></textarea>
                </div>

               
                
               
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
      </div>
    </div>
   

          
  
    )
}

export default AddAddress;