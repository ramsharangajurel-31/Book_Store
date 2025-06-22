import React from 'react';
import BlogBannerImage from "../assets/image.png";

const BlogBanner = ({title}) => {
  return (
    <div>
      <img src={BlogBannerImage} alt="image" height={500} className="blog-banner" />
      <h4 className='blog-title'>{title}</h4>
    </div>
  );
};

export default BlogBanner;
