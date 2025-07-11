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
   const editProduct = async (id, updateData) => {
    const { title, description, instock, price } = updateData;

    try {
      const response = await fetch(
        `http://localhost:5000/api/product/updateproduct/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, description, instock, price }),
        }
      );

      const data = await response.json();
      console.log("edited data", data);
      allProduct();
    } catch (error) {
      console.log("internal server error", error);
      throw new Error("failed to update product");
    }
  };


  return (
    <ProductContext.Provider value={{product, state, dispatch, allProduct}}> 
        {props.children}     
    </ProductContext.Provider>
  )
}

export default ProductState
