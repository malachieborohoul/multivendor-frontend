import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Checkout(props) {
    return (
      <div className="container mt-4">
        <h3 className="mb-4">All items</h3>
          <div className="table-responsive">
            <div className="row">
              <div className="col-md-12 col-12">
                <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <Link><img src={logo} className="thumbnail" width='80' alt="..." /></Link>
                      <Link><p>Django</p></Link>
                    </td>
                    <td>500</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Total</th>
                    <th>Rs 2000</th>
                  </tr>

                  <tr>
                    <td className="text-center  " colSpan="3">
                    <Link className="btn btn-secondary">Continue shopping</Link>
                    <Link className="btn btn-success ms-1">Proceed to Payment</Link> 
                      
                    </td>
                   
                  </tr>
                </tfoot>
              </table>
              </div>
            </div>
            
          </div>
        
      </div>

            
  
    )
}

export default Checkout;