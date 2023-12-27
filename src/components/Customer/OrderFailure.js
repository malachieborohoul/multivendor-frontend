import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function OrderFailure() {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-body text-center">
            <p><i className="fa fa-times-circle text-danger fa-3x"></i></p>
            <h3 className="text-danger">Ooop.. Something went wrong</h3>
            <p >
              <Link className="btn btn-primary" to="/">Home</Link >
              <Link className="btn btn-secondary ms-2" to="/customer/dashboard">Dashboard</Link >
              </p>
          </div>
        </div>
      </div>

            
  
    )
}

export default OrderFailure;