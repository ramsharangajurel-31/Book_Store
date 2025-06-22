import React, { useContext , useEffect, useState } from 'react';
import ProductContext from '../Context/ProductContext';
import SmallBanner from './smallbanner';
import AboutImage from '../assets/about-image.jpg';
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from './EditProductModal';

const About = (props) => {
  const { state: { cart, products }, dispatch , allProduct } = useContext(ProductContext);
  //edit&delete
  const[menuVisible , setMenuVisible]= useState(false);
  const [modalVisible , setModalVisible]= useState(false);
  const [selectProduct , setSelectProduct]=useState(null);

  const bodyStyle = {
    backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };

  const title = "About us";
  //edit& delete
    const toggleMenu=(id)=>{
      console.log("toggle item id" , id);
      setMenuVisible ((prevState)=>({
      ...prevState,[id]: !prevState[id],
     }));
      };
     const closeEditModal=()=>{
        setMenuVisible(false);
        setSelectProduct(null);
    }
    const saveEdit=(updateData)=>{
      console.log("Save Edit Product", updateData);
      editProduct(selectProduct._id, updateData);
      
    };
    const openEditModal=(product)=>{
      setSelectProduct(product);
      console.log("Editing Product", product);
      
      setModalVisible(true);


    };
    const handleDelete =(id)=>{
      console.log("Delete item id", id);
    };
    useEffect(()=>{
      allProduct();
    },[]
  );
  

  return (
    <div className={`bg-${props.mode}`} style={bodyStyle}>
      <SmallBanner title={title} />
      <div className="container">
        {/* About Text Section */}
        <div className="row">
          <div className="col-md-6 about-image">
            <img src={AboutImage} alt="About us" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h4>About us</h4>
            <p>
              At <span>Light & Lens</span>,, we believe photography is more than capturing a moment —                
                it's about preserving emotion, light, and memory in its rawest form.                 <br /><br />                
                 What started as a passion for natural light and quiet beauty has grown into a creative                 
                  journey of storytelling through the lens.                 <br /><br />                 
                  Whether we're framing a gentle glance, a stolen laugh, or the calm before sunset,       
                             our work is rooted in honesty, intimacy, and light.                 <br /><br />                
               Every client, every shoot, every image — it’s all personal.                
                <br /><br />We don’t just take photos. <b>We frame the feeling.</b>   
              <b>We frame the feeling.</b>
            </p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="row mt-4">
          {products && products.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="context-card">
                <img src={AboutImage} className="card-img-top" alt={item.name} />
                <div className="context-card-body">
                  <div className='title-content'>
                  <h5 className="card-title">{item.name}</h5>
                  <BsThreeDots onClick={()=>toggleMenu(item._id)} />
                    {
                      menuVisible[item._id] && (
                        <div className="menu-option">
                          <button onClick={()=>openEditModal(item)}>Edit</button>
                            <button onClick={()=>handleDelete(item._id)}>Delete</button>
                           </div>
                           
                      )
                    }
                  </div>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: {item.price}</p>
                  {cart.some(p => p._id === item._id) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
              {/* //editproduct modal */}
              {modalVisible && selectProduct && selectProduct._id === item._id && (
                <EditProductModal product={selectProduct} 
                 onClose = { closeEditModal}
                 onSave={saveEdit}/>

              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
