import React from 'react';
 // Import the CSS file

const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted hub for discovering great books</p>
      </div>

      <div className="about-content container">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            At Online Book Store, we believe that reading should be accessible, enjoyable, and inspiring.
            Our mission is to connect readers with stories that matter, knowledge that empowers, and authors
            who make a difference.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded in 2020 by passionate bibliophiles, Online Book Store started as a humble catalog of 500
            hand-picked books. Today, we serve thousands of readers with a diverse collection, fast delivery,
            and a seamless digital experience.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>📚 Thousands of titles across every genre</li>
            <li>🚚 Quick & reliable delivery</li>
            <li>💡 Personalized recommendations</li>
            <li>💬 Friendly customer support</li>
            <li>🌍 E-books and sustainable practices</li>
          </ul>

          <h2>Join Our Community</h2>
          <p>
            Whether you're a casual reader, a student, or a lifelong bookworm — we welcome you to explore,
            learn, and grow with us.
          </p>

          <a href="/shop" className="btn-about">Start Browsing</a>
        </div>

        <div className="about-image">
          <img src="/assets/about-books.jpg" alt="Stack of books" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
