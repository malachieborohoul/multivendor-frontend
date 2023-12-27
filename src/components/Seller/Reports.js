import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import SellerSidebar from "./SellerSidebar";

function Reports(props) {
    return (
   

            <div className="container mt-4 ">
              <div className="row">
                <div className="col-md-3 col-12 mb-2">
                  <SellerSidebar/>
                </div>
                <div className="col-md-9 col-12 mb-2">
                  <div className="row">
                    <div className="col-md-4 mb-2">
                      <div className="card">
                        <div className="card-body text-center">
                          <h4>Daily Reports</h4>
                          <h5><Link className="btn btn-info" >View</Link> </h5>


                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-2">
                      <div className="card">
                        <div className="card-body text-center">
                          <h4>Monthly Reports</h4>
                          <h5><Link className="btn btn-info" >View</Link> </h5>

                        </div>
                      </div>
                    </div>


                    <div className="col-md-4 mb-2">
                      <div className="card">
                        <div className="card-body text-center">
                          <h4>Yearly Reports</h4>
                          <h5><Link className="btn btn-info" >View</Link> </h5>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
  
    )
}

export default Reports;