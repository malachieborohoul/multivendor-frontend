import { Link} from 'react-router-dom'

function Header() { 
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Python Market Place
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>

            

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My Account
                </a>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="/customer/register">Register</Link></li>
                    <li><Link class="dropdown-item" to="/customer/login">Login</Link></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><Link class="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                    <li><Link class="dropdown-item" to="logout">Logout</Link></li>
                </ul>
                </li> 

                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Vendors Panel
                </a>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="/seller/register">Register</Link></li>
                    <li><Link class="dropdown-item" to="/seller/login">Login</Link></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><Link class="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
                    <li><Link class="dropdown-item" to="/seller/logout">Logout</Link></li>
                </ul>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/checkout">
                  My Cart (4)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )


 }


 export default Header