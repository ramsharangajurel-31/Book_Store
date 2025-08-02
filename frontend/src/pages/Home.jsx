import React from 'react';
// import About from "./Productlist";
import Service from "./service";
import Testimonial from '../components/testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import heroImg from '../assets/herosection.jpeg';


const Home = () => {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right">
          <h1 className="hero-title">Read. Learn. Grow.</h1>
          <p className="hero-subtitle">
            Discover thousands of books across all genres — anytime, anywhere.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left" data-aos-delay="600">
          <img src={heroImg} alt="Books Stack" />
        </div>
      </div>
    </section>
   {/* <About mode={mode} /> */}
   <Service /> 

   <Testimonial  />
 
   
   
    </div>
  )
}

export default Home;  