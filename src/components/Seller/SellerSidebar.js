import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function SellerSidebar(props) {
    return (  
      <div class="list-group">
                     
                    <Link to="/customer/dashboard" class="list-group-item list-group-item-action active">SellerSidebar</Link>
                    <Link to="/customer/orders" class="list-group-item list-group-item-action">Orders</Link>
                    <Link to="/customer/wishlist" class="list-group-item list-group-item-action">Wishlist</Link>
                    <Link to="/customer/profile" class="list-group-item list-group-item-action">Profile</Link>
                    <Link to="/customer/change-password" class="list-group-item list-group-item-action">Change Password</Link>
                    <Link to="/customer/addresses" class="list-group-item list-group-item-action">Addresses</Link>
                    <Link to="#" class="list-group-item list-group-item-action text-danger">Logout</Link>

                  </div>
  
    )
}

export default SellerSidebar;