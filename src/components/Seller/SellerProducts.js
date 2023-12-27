import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Sidebar from "./SellerSidebar";

function SellerProducts(props) {
  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">

          <div className="row">
        <h3><Link to="/seller/add-product" className="btn btn-primary ms-1 float-end mb-2"><i className="fa fa-plus-circle"></i> Add Product</Link></h3>

            <div className="table-responsive"></div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    
                    <Link>
                      <p>Django</p>
                    </Link>
                  </td>
                  <td>500</td>
                  <td><span className="text-success"><i className="fa fa-check-circle"></i> Completed</span></td>
                  {/* <td><span className="text-secondary"><i className="fa fa-spin fa-spinner"></i> Completed</span></td> */}
                  {/* <td><span className="text-danger"><i className="fa fa-times-circle"></i> Completed</span></td> */}
                  <td>
                    <Link className="btn btn-info ms-1"> View</Link>
                    <Link className="btn btn-primary ms-1"> Edit</Link>
                    <Link className="btn btn-danger ms-1"> Delete</Link>
                    </td>
                </tr>
              </tbody>
           
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerProducts;
