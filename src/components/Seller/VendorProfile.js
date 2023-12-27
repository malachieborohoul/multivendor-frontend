import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import SellerSidebar from "./SellerSidebar";

function VendorProfile(props) {
    return (
      <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
            <h3 className="mb-4">Update Profile</h3>
            <form>
                <div className="mb-3">
                  <label for="fistname" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="fistname" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                  <label for="lastname" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                  <label for="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label for="image" className="form-label">Photo image</label>
                  <input type="file" className="form-control" id="password"/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
      </div>
    </div>
   

          
  
    )
}

export default VendorProfile;