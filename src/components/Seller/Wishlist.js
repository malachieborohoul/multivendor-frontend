import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Sidebar from "./SellerSidebar";

function Wishlist(props) {
  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive"></div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link>
                      <img
                        src={logo}
                        className="thumbnail"
                        width="80"
                        alt="..."
                      />
                    </Link>
                    <Link>
                      <p>Django</p>
                    </Link>
                  </td>
                  <td>500</td>

                  <td><Link className="btn btn-danger">Remove</Link></td>
                </tr>
              </tbody>
           
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
