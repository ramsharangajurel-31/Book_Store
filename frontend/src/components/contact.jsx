import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import FooterImage from"../assets/contact-section.jpg";
const Contact = () => {
    let title = "Contact us";
 const notify = () => toast(" Message Sent Successfully !");

    return (
        <div className= "footer">
            <img src={FooterImage} alt="footerimage" />
            <div className="container">
                <div className="row"> 
                    <div className="col-md-6">
                        <h5>Let's Connect</h5>
                        <p>
                             Your thoughts, questions, and feedback are what help us grow and improve Teak.
                             Whether you've encountered an issue, have a suggestion, or just want to share your experience, we're here to listen.
                             Reach out to us using the form below or through any of the other contact methods provided. Let's make your bookmarking experience even better, together. 
                        </p>
                        <div className="contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <span>support@teak.com</span>
                        </div>

                        <div className="contact-item">
                         <i className="fa-solid fa-phone"></i>
                         <span>+123 456 7890</span>
                        </div>

                         <div className="contact-item"> 
                           <i className="fa-solid fa-location-dot"></i>
                           <span>123 Teak Lane, Bookmark City, WebWorld</span>
                         </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-container">
                            <h5>Please fill out the form below with your query or message. We strive to respond all inquiries within 24 hours or before.</h5>
                            <form>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" placeholder="Enter your name" />

                                <label htmlFor="email">Your Email Address</label>
                                <input type="email" id="email" placeholder="Enter your email"  />

                                <label htmlFor="subject">What's this about?</label>
                                <input type="text" id="subject" placeholder="Enter a subject" />

                                <label htmlFor="message">Message Box</label>
                                <textarea id="message" placeholder="Please type your message here"></textarea>
 
                                <button type="button" className="send-btn" onClick={notify}>Send Now</button>
                                < ToastContainer/> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019096768278!2d-122.40135048468135!3d37.78812397975708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d4324cbf%3A0xd574837ee727d6!2s123%20Teak%20Ln%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1682909282292!5m2!1sen!2sus"
                 width="100%"
                 height="300"
                 style={{border:0, borderRadius: '12px', marginTop: '20px'}}
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
      
        </div>
    );
} 

export default Contact;
