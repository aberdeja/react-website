import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-brand">
              ShopHub
            </Link>
            <div className="navbar-links">
              <Link to="/" className="navbar-link">
                Home
              </Link>
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
              <Link to="/checkout" className="navbar-link">
                Cart
              </Link>
              <Link to="/auth" className="navbar-link">
                Login
              </Link>
              <Link to="/about" className="navbar-link">
                About
              </Link>
            
            </div>
            <div className="navbar-auth">
                <div className="navbar-auth-links">
                    <Link to="/auth" className="btn btn-secondary">
                        Login
                    </Link>
                    <Link to="/auth" className="btn btn-primary">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
      </nav>
    );
}