import React from 'react';

const Service = () => {
  return (
    <div>
      <div className="services">
        <div className="services-container">
          <h2>Our Services</h2>
          <p className="services-intro">
            Empowering your reading journey — with convenience, quality, and care.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-book-open"></i>
              <h3>Personalized Book Recommendations</h3>
              <p>
                Discover books tailored to your interests and reading history — curated just for you.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-shipping-fast"></i>
              <h3>Fast & Secure Delivery</h3>
              <p>
                Enjoy quick, trackable delivery with protective packaging to ensure your books arrive in perfect condition.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-gift"></i>
              <h3>Gifting & Wrapping Options</h3>
              <p>
                Send a book as a thoughtful gift — with elegant wrapping and personal message options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
