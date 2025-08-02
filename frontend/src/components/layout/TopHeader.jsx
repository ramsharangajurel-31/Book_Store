import React from 'react';
import { FaTwitter, FaInstagramSquare, FaFacebookF, FaBookOpen } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className='container top-header-content'>

        {/* Branding Section */}
        <div className='top-branding'>
          <FaBookOpen className="book-icon animated-icon" />
          <div className="branding-text">
            <h2 className="store-name">Online Book Store</h2>
            <p className="tagline">Your Digital Book Hub</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className='top-head-icons'>
          <ul>
            <li><FaFacebookF /></li>
            <li><FaInstagramSquare /></li>
            <li><FaTwitter /></li>
          </ul>
        </div>

        {/* Call Number */}
        <div className="tophead-call">
          <h5>Call: 0450 455 724</h5>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
