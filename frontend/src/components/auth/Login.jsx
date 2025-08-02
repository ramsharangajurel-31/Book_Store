import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Frontend validation
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data && response.data.authToken) {
        localStorage.setItem("auth-token", response.data.authToken);
        navigate("/admin");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Log In</button>

            <p className="signup-link">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>

        <div className="login-image"></div>
      </div>
    </>
  );
};

export default LoginPage;
