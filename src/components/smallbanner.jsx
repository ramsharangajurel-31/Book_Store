import React from "react";
import SmallBannerImage from "../assets/b2.jpg";

const SmallBanner = ({title}) => {
  return (
    <div>
      <img src={SmallBannerImage} alt="image" height={500} className="small-banner" />
       <h4 className="about-title">{title}</h4>
    </div>
   
  );
};

export default SmallBanner;
