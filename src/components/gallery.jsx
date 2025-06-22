import React from 'react'
import GalleryImage1 from "../assets/gallery-1.jpg";
import GalleryImage2 from "../assets/gallery-2.jpg";
import GalleryImage3 from "../assets/gallery-3.jpg";
import GalleryImage4 from "../assets/gallery-4.jpg";
import GalleryImage5 from "../assets/gallery-5.jpg";
import GalleryImage6 from "../assets/gallery-6.jpg";
import GalleryImage7 from "../assets/gallery-7.jpg";
import GalleryImage8 from "../assets/gallery-8.jpg";

const Gallery = (props) => {
  return (
    <div>
      <div className={`gallery-section bg-${props.mode}`}>
        <div className='container'>  
            <div className='row'>
              <h3>Our Captures</h3>
            <div className='col-md-3'> 
                  <img src={GalleryImage1} alt='image1' />
                </div>
                 <div className='col-md-3'>
                  <img src={GalleryImage2} alt='image2' />
                </div>
                  <div className='col-md-3'>
                  <img src={GalleryImage3} alt='image3' />
                </div>
                 <div className='col-md-3'> 
                  <img src={GalleryImage4} alt='image4' />
                </div>
                  <div className='col-md-3'>
                  <img src={GalleryImage5} alt='image5' />
                </div>
                 <div className='col-md-3'>
                  <img src={GalleryImage6} alt='image6' />
                </div>
                  <div className='col-md-3'>
                  <img src={GalleryImage7} alt='image7' />
                </div>
                 <div className='col-md-3'>
                  <img src={GalleryImage8} alt='image8' />
                </div>
                 


            </div> 
        </div>
      </div>
    </div>
  )
}

export default Gallery;
 