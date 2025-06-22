import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FaShoppingCart } from "react-icons/fa";
import ProductContext from "../Context/ProductContext";
  
 const notify = () => toast("Login Successful!");


// const Navbar = ({ title, mode }) => {
const Navbar = ({ title, mode, toggleMode, text }) => {

const context = useContext(ProductContext);
const { state: { cart } } = context;
console.log(" nav cart " , cart);

  // console.log(mode);
   

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} fixed-top`}>
        <div className="container-fluid">
          <a className="navbar-brand navbar1" href="/">
            {title}
          </a>  
          
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
          <div className="collapse navbar-collapse navbar1" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar1">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blogs
                </Link>
              </li>
              <li className="nav-item"> 
                <Link  className="nav-link" to="/companyform">
                  Company Form  
                </Link> 
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Project 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Project 2
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      More:
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Sign Up / Log In
                </Link>
              </li>
              
            </ul>
            <Link to ="/cartitems">
            <button type="button" className="btn btn-primary btn-sm position-relative" >
              <FaShoppingCart size={18} />
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.7rem' }}>
               {cart.length}
               <span className="visually-hidden">cart items</span>
               </span>
              </button>
            </Link>

            <button onClick={toggleMode} className="btn btn-primary">
              {text}
            </button>
             <button  className = "btn1 btn-primary"onClick={notify}>Notify!</button>
               <ToastContainer />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;