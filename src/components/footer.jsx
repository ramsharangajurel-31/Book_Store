import React from "react";


const Footer = (props) => {
  

  return (
    <div className={`bg-${props.mode}`}>
      <div className="card-body-1" >
         <div className={`footer bg-${props.mode}`}> 

          <div className="container">
            <div className="row">
              {/* <div className="col-md-4"> */}
              <div className="footer-text-1">
                <h4>Light & Lens</h4>
                <p>Framing Life, One shoot at a time!</p>
              </div>
                 <div className={`footer-columns bg-${props.mode}`}>
 
                <div className="footer-column">
                  <h4 className={`bg-${props.mode}`}>
                    <i className="fas fa-map-marker-alt"></i> Location
                  </h4>
                  <p className={`bg-${props.mode}`}>Kathmandu , Nepal </p>
                  <p className={`bg-${props.mode}`}>Available Worldwide</p>
                </div>
                <div className="footer-column">
                  <h4 className={`bg-${props.mode}`}>
                    <i className="fas fa-envelope"></i> Contact
                  </h4>
                  <p className={`bg-${props.mode}`}>
                    <a href="mailto:hello@lightandlens.com">
                      <i className="fas fa-paper-plane"></i> hello@lightandlens.com
                    </a>
                  </p>
                  <p className={`bg-${props.mode}`}>
                    <a href="tel:+1234567890">
                      <i className="fas fa-phone"></i> +123 456 7890
                    </a>
                  </p>
                </div>
                <div className="footer-column">
                  <h4  className={`bg-${props.mode}`}>
                    <i className="fas fa-heart"></i> Follow Us
                  </h4>
                  <div className={`social-icons bg-${props.mode}`}>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="footer-bottom">
                <p className={`bg-${props.mode}`}>© 2025 Light & Lens. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
