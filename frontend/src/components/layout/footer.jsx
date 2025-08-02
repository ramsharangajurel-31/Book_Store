import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { TfiLocationPin } from 'react-icons/tfi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">

        <div className="footer-box">
          <h3>About Us</h3>
          <p>
            We listen to your ideas, understand your needs, and work closely with you to deliver custom woodwork that exceeds your expectations.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Get In Touch</h3>
          <p><span className="icon"><TfiLocationPin /></span>Hawkesbury location and Sydney wide, hills area, Queensland, Melbourne CBD</p>
          <p><span className="icon"><FaPhoneAlt /></span>0450 455 724</p>
          <p><span className="icon"><FaEnvelope /></span>minionlinebookstore@gmail.com</p>
          <p>ABN: 18 940 955 619</p>
        </div>

        <div className="footer-box">
          <h3>Business Hour</h3>
          <ul>
            <li>Monday: 9AM-6PM</li>
            <li>Tuesday: 9AM-6PM</li>
            <li>Wednesday: 9AM-6PM</li>
            <li>Thursday: 9AM-6PM</li>
            <li>Friday: 9AM-6PM</li>
            <li>Saturday: 10AM-1PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025<span>Mini Online Book Store</span>. All Rights Reserved. Designed By: <span className="designer">Ramsharan Gajurel</span></p>
      </div>
    </footer>
  );
};

export default Footer;