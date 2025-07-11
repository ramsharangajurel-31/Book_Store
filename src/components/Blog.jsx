import React from 'react';
import BlogBanner from "./blogbanner";
import BlogImage from "../assets/BlogImage.jpg";
import FunctionBased from "./FunctionBased";
import Footer from './footer';

const Blog = (props) => {
  const Blogs = [
    {
      "id": 1,
      "title": "Blog 1",
      "description": "This is the first blog",
    },
    {
      "id": 2,
      "title": "Blog 2",
      "description": "This is the second blog",
    },
    {
      "id": 3,
      "title": "Blog 3",
      "description": "This is the third blog",
    },
  ];

  const getCardBodyStyle = () => {
    if (props.mode === "dark") {
      return { backgroundColor: "#0f1721", color: "white" };
    } else {
      return { backgroundColor: "white", color: "black" }; 
    }
  };

  let title = props.title || "Welcome to Blogs!"; 

  return (
    <div style={{ backgroundColor: props.backgroundColor || 'white' }}>
      <BlogBanner title={title} />
      <div className="container">
        <div className="row">
          {Blogs.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <div className="card">
                  <img src={BlogImage} alt="Blog Image" />
                  <div className='card-body' style={getCardBodyStyle()}>
                    <h5 className='card-title'>
                      {item.title}
                    </h5>
                    <p className='description'>
                      {item.description}
                    </p>
                    <a href="#" className='btn btn-info'>See More</a>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <FunctionBased />  */}
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Blog;
 