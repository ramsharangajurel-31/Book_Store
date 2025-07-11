import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";


const LoginPage = () => {
  return (
    <>
    <div className="login-container">
  
      <div className="login-form">
        <h2>Log In</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Log In</button>

          <p className="signup-link">
            Don’t have an account? <Link to ="/signup">Sign Up</Link>
          </p>
        </form>
      </div>

     
      <div className="login-image"></div>
    </div>
    <Footer />
    </>

  );
};

export default LoginPage;
