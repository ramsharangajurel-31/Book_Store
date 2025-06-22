 import React from 'react';

const Service = (props) => {


  return (
    <div>
      <div className={`services bg-${props.mode}`}>
        <div className="services-container">
          <h2 className={`bg-${props.mode}`}>Our Services</h2>
          <p className={`services-intro bg-${props.mode}`}> 
            Capturing your moments in light and emotion — with style, soul, and sincerity.
          </p>

          <div className="services-grid">
             <div className={`service-card bg-${props.mode}`}>
              <i className="fas fa-camera-retro"></i>
              <h3>Portrait Sessions</h3> 
              <p>
                Natural, relaxed portraits that bring out the real you — perfect for individuals, couples, or families.
              </p>
            </div>
            <div className={`service-card bg-${props.mode}`}>
              <i className="fas fa-heart"></i>
              <h3>Weddings & Elopements</h3>
              <p>
                Timeless, emotive photography that tells the full story of your special day from start to finish.
              </p>
            </div>
            <div className={`service-card bg-${props.mode}`}>
              <i className="fas fa-globe"></i>
              <h3>Travel & Lifestyle</h3>
              <p>
                Visual storytelling for brands, creators, and travelers — shot on location, with heart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service
