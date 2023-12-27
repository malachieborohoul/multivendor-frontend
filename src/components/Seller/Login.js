import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function SellerLogin(props) {
    return (
   

            <div className="container mt-4">
              <h3 className="mb-4">SellerLogin</h3>
              <form>

                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password"/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
  
    )
}

export default SellerLogin;