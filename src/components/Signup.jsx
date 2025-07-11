import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";


const SignupPage = () => {
  return (
    <>
    <div className="login-container">

      <div className="login-form">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Choose a username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" />

          <button type="submit">Sign Up</button>

          <p className="signup-link">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>

     
      <div className="signup-image"></div>
    </div>
    <Footer />
    </>
  );
};

export default SignupPage;
