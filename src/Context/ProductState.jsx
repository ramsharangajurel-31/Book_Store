import React, { useReducer } from 'react'
import ProductContext from './ProductContext'
import { cartReducer } from './Reducer';

const ProductState = (props) => {
    const product=[
      {
        _id:1,
        name:"Apple",
        description: "This is local product of Mustang",
        price:200,
        instock: 3,
    },
     {
        _id:2,
        name:"Banana",
        description: "This is local product of Jhapa",
        price:900,
        instock: 7,
    },
     {
        _id:3,
        name:"Orange",
        description: "This is local product of Lamjung",
        price:290,
        instock: 6,
    },
     {
        _id:4,
        name:"Mango",
        description: "This is local product of Pokhara",
        price:400,
        instock: 5,
    },
  ];
  //usereducer
  const [state , dispatch]= useReducer(cartReducer , {
    products:product,
    cart:[]
  });
  const allProduct = async() => {
    try {
      const response = await fetch('http://localhost:5000/api/product', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token" : "xyz"
          }
          });
          const data = await response.json();
          setProduct (data);
          console.log("data  from backend response", data);
          } catch (error) {
            console.error("error",error);
        



      };
  }

  return (
    <ProductContext.Provider value={{product, state, dispatch, allProduct}}> 
        {props.children}     
    </ProductContext.Provider>
  )
}

export default ProductState
