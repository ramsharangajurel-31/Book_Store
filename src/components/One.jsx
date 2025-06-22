import React from "react";
import Image from "../assets/participant1.jpg";

const One = (props) => {
  // Function to get card-body background style based on mode
  const getCardBodyStyle = () => {
    if (props.mode === "dark") {
      return { backgroundColor: "#0f1721", color: "white" }; // dark background 
    } else {
      return { backgroundColor: "white", color: "black" }; // light background 
    }
  };   

  return (
    <div className={`bg-${props.mode}`} >   
     

      <div className="container">
        
        <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={Image} className="card-img-top" alt="..." />
            <div className="card-body" style={getCardBodyStyle()}> 
              <h5 className="card-title">Card title</h5>
              
              <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ducimus expedita obcaecati.
              </p>
              <a href="#" className="btn btn-info">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
         <div className="col-md-4">
          <div className="card">
            <img src={Image} className="card-img-top" alt="..." />
            <div className="card-body" style={getCardBodyStyle()}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ducimus expedita obcaecati.
              </p>
              <a href="#" className="btn btn-info">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
         <div className="col-md-4">
          <div className="card">
            <img src={Image} className="card-img-top" alt="..." />
            <div className="card-body" style={getCardBodyStyle()}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ducimus expedita obcaecati.
              </p>
              <a href="#" className="btn btn-info">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        
        
        
      </div>
      
      </div>
      </div> 
  );
};

export default One;
