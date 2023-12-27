import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function SellerSidebar(props) {
    return (  
      <div class="list-group">
                     
                    <Link to="/seller/dashboard" class="list-group-item list-group-item-action active">Dashboard</Link>
                    <Link to="/seller/products" class="list-group-item list-group-item-action">Products</Link>
                    <Link to="/seller/add-product" class="list-group-item list-group-item-action">Add Product</Link>
                    <Link to="/seller/orders" class="list-group-item list-group-item-action">Orders</Link>
                    <Link to="/seller/customers" class="list-group-item list-group-item-action">Customers</Link>
                    <Link to="/seller/reports" class="list-group-item list-group-item-action">Reports</Link>
                    <Link to="#" class="list-group-item list-group-item-action text-danger">Logout</Link>

                  </div>
  
    )
}

export default SellerSidebar;