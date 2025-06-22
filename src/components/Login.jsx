import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { TiEye } from "react-icons/ti";
// import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const navigate= useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="login-title">
            <h4>Log In</h4>

       
            <div className="input-box relative">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>

       
            <div className="input-box relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full pr-10"
              />
              <i className="bx bxs-lock-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {/* {showPassword ? <IoMdEyeOff size={20} /> : <TiEye size={20} />} */}
              </span>
            </div>

           
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forget Password?</a>
            </div>

  
            <button type="submit" className="login-btn">Log In</button>

        
            <div className="register-link">
              <p>Don't have an account? <Link to="/signup">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
