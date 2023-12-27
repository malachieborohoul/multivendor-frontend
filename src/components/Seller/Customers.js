import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Sidebar from "./SellerSidebar";
import SellerSidebar from "./SellerSidebar";

function Customers(props) {
  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive"></div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                  
                      BSM
                  </td>
                  <td>malachieborohoul@gmail.com</td>
                  <td>+236697140690</td>
                  {/* <td><span className="text-secondary"><i className="fa fa-spin fa-spinner"></i> Completed</span></td> */}
                  {/* <td><span className="text-danger"><i className="fa fa-times-circle"></i> Completed</span></td> */}
                  <td>
                  <button class="btn btn-primary ms-1 " >Order</button>
                  <button class="btn btn-danger ms-1 " >Remove from list</button>

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

export default Customers;
