import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Sidebar from "./Sidebar";

function AddressList(props) {
    return (
      <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-12">

            <Link className="btn btn-outline-success mb-4 float-end"><i className="fa fa-plus-circle text-success"></i> Add Address</Link>

            </div>
          </div>
            <div className="row">
              <div className="col-4 mb-2">
                <div className="card">
                  <div className="card-body text-muted">
                    <h6>
                    <i className="fa fa-check-circle text-success"></i><br/>
                      123, NDR, Cameroon
                      </h6>
                  </div>

                </div>
              </div>

              <div className="col-4 mb-2">
                <div className="card">
                  <div className="card-body text-muted">
                    <span className="badge bg-secondary">Mark Default</span>
                    <h6>123, NDR, Cameroon</h6>
                  </div>

                </div>
              </div>

              <div className="col-4 mb-2">
                <div className="card">
                  <div className="card-body text-muted">
                    <span className="badge bg-secondary">Mark Default</span>
                    <h6>123, NDR, Cameroon</h6>
                  </div>

                </div>
              </div>

              <div className="col-4 mb-2">
                <div className="card">
                  <div className="card-body text-muted">
                    <span className="badge bg-secondary">Mark Default</span>
                    <h6>123, NDR, Cameroon</h6>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
   

          
  
    )
}

export default AddressList;