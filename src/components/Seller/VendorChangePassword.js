import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import SellerSidebar from "./SellerSidebar";

function VendorChangePassword(props) {
    return (
      <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
            <h3 className="mb-4"> Change Password</h3>
            <form>
             

                <div className="mb-3">
                  <label for="password" className="form-label">New Password</label>
                  <input type="password" className="form-control" id="password" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label for="cpassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="cpassword" aria-describedby="emailHelp"/>
                </div>
                
               
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
      </div>
    </div>
   

          
  
    )
}

export default VendorChangePassword;