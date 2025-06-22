import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic password strength rule: min 8 chars, at least one number & letter
    const passwordRegex = /^[A-Za-z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain both letters and numbers.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    navigate("/login")
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <form className="login-title" onSubmit={handleSubmit}>
            <h4>Sign Up</h4>

            <div className="input-box">
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-box">
              {/* Use type="password" here, not confirmpassword */}
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit" className="login-btn">Sign Up</button>

            <div className="register-link">
              <p>Already have an account? <a href="/login">Log In</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
