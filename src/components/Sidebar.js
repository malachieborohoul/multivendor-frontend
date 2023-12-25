import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Sidebar(props) {
    return (  
      <div class="list-group">
                     
                    <a href="#" class="list-group-item list-group-item-action active">Sidebar</a>
                    <a href="#" class="list-group-item list-group-item-action">Orders</a>
                    <a href="#" class="list-group-item list-group-item-action">Wishlist</a>
                    <a href="#" class="list-group-item list-group-item-action">Profile</a>
                    <a href="#" class="list-group-item list-group-item-action">Addresses</a>
                    <a href="#" class="list-group-item list-group-item-action text-danger">Logout</a>

                  </div>
  
    )
}

export default Sidebar;