import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("https://book-store-61ip.onrender.com/api/auth/createuser", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.data && response.data.authToken) {
        localStorage.setItem("auth-token", response.data.authToken);
        // Navigate to admin panel instead of login page
        navigate("/admin");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Sign Up</button>

            <p className="signup-link">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>

        <div className="signup-image"></div>
      </div>
    </>
  );
};

export default SignupPage;
