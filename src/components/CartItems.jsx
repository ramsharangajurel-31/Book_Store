import React, { useContext } from 'react';
import ProductContext from '../Context/ProductContext';
import { MdDelete } from "react-icons/md";

const CartItems = () => {
const context = useContext(ProductContext);
const { state: { cart }, dispatch } = context;
console.log(" nav cart " , cart);
const total = cart.reduce((acc, item )=> acc + item.price * item.qty,0)

  return (
    <div className='container-cartitems'>
      <div className='productcontainer-cart'>
        <ul className='product-list'>
          {
            cart.map((item) =>(
              <li key ={item._id}>
                <div className="row">
                  <div className="col-md-2 cart">
                    <img src = "/apple.jpeg" alt='Apple Image' />
                    </div>
                    <div className="col-md-2">
                      <h5> {item.name}</h5>
                      </div>
                      <div className="col-md-2 cart">
                        <h5>Price Rs:{item.price}</h5>
                      </div>
                      <div className="col-md-2 cart">
                        <select value={item.qty}
                        onChange={(e) =>
                          dispatch ({
                            type: "UPDATE_CART_ITEM",
                            payload: { _id: item._id, qty: e.target.value },
                          })

                        }
                        className='form-control1'
                        >
                          {[...Array(item.instock).keys()].map((x)=>(
                            <option key ={x+1} value= {x+1}>{x+1}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-2">
                        <button className='btn btn-light' 
                        onClick={()=> dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })}><MdDelete /></button>
                      </div>
                    </div>
             
              </li>
            ))
          }
          
        </ul>
      </div>
      <div className="Summary">
        <div >Total items: {cart.length}</div>
        <h4>Sub-Total: {total}</h4>
        <button className="btn btn-primary">Proceed to Checkout</button>
      </div>
      
    </div>
  );
};

export default CartItems;
