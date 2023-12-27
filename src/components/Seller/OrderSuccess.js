import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function OrderSuccess() {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-body text-center">
            <p><i className="fa fa-check-circle text-success fa-3x"></i></p>
            <h3 className="text-success">Thank you for the Order</h3>
            <p >
              <Link className="btn btn-primary" to="/">Home</Link >
              <Link className="btn btn-secondary ms-2" to="/customer/dashboard">Dashboard</Link >
              </p>
          </div>
        </div>
      </div>

            
  
    )
}

export default OrderSuccess;