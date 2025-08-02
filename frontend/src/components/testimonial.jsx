import React from 'react';

const Testimonial = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What Readers Say</h2>
        <p className="testimonials-intro">
          Real stories from book lovers who found their next favorite read with us.
        </p>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p className="quote">
              “I found so many amazing books here — every genre and every mood covered. Shopping was easy and fast!”
            </p>
            <div className="client-info">
              <i className="fas fa-user test-icon"></i>
              <div>
                <h4>Ramesh Dahal</h4>
                <span>Avid Reader & Book Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="quote">
              “The book recommendations were spot on! I discovered authors I now follow regularly.”
            </p>
            <div className="client-info">
              <i className="fas fa-user test-icon"></i>
              <div>
                <h4>Nabin Devkota</h4>
                <span>Book Reviewer & Blogger</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="quote">
              “Great selection and quick delivery. This bookstore feels like it truly understands readers.”
            </p>
            <div className="client-info">
              <i className="fas fa-user test-icon"></i>
              <div>
                <h4>Prabin Dhakal</h4>
                <span>Casual Reader & Lifestyle Blogger</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
