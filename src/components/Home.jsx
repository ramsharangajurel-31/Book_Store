import React from 'react';
import Banner from "./banner";
// import One from "./One";
import About from "./About";
import Service from "./service";
import Gallery from "./gallery";
import Testimonial from "./testimonial";
import Footer from "./footer";


const Home = (props) => {
  const { mode } = props;
  return (
    <div>
      <div className='home-banner'>
   <Banner mode={mode} /></div>
   {/* <One mode={mode} /> */}
   <div className='home-text'>
    <h1>Light & Lens</h1>
       <h5> Framing life, one shot at a time.</h5>
   </div>
   <div className='home-button'>
    <a href='#' className='  btn btn-info home-button-1'>View Portfolio</a>
    < a href='#' className=' btn btn-info home-button-2'>Book a Session</a>

   </div>
   {/* <About mode={mode} /> */}
   <Service mode={mode} /> 
   <Gallery mode={mode} />
   <Testimonial mode={mode} />
   <Footer mode={mode} />
   
   
    </div>
  )
}

export default Home;  