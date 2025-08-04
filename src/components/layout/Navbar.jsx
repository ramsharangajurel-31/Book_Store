import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
import ProductContext from "../../Context/ProductContext";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ toggleMode, mode, text }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { state: { cart } } = useContext(ProductContext);

  const notify = () => {
    toast.success("Notification triggered!");
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`main-navbar ${mode}`}>
      <div className="nav-container">
       <nav className="navbar">
        <h3>Book Store</h3>
        </nav>


        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          {/* <Link to="/blog" className="nav-link">Blogs</Link> */}
          <Link to="/companyform" className="nav-link">Company Form</Link>
          <Link to ="/categories" className="nav-link">Book List</Link>


          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/admin" className="nav-link">Admin Panel</Link>

          <Link to="/cartitems" className="nav-link cart-link">
            <FaShoppingCart />
            <span className="cart-badge">{cart.length}</span>
          </Link>

        </div>
      </div>

   
    </nav>
  );
};

export default Navbar;
