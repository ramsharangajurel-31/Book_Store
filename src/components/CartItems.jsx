import React, { useContext } from 'react';
import ProductContext from '../Context/ProductContext';
import { MdDelete, MdAdd, MdRemove } from "react-icons/md";
import { getImageUrl } from '../utils/imageUtils';

const CartItems = () => {
  const { state: { cart }, dispatch } = useContext(ProductContext);
  
  const total = cart.reduce((acc, item) => acc + (Number(item.price) || 0) * (Number(item.qty) || 1), 0);
  
  const totalItems = cart.reduce((acc, item) => acc + (Number(item.qty) || 1), 0);


  const handleQuantityChange = (item, newQty) => {
    if (newQty >= 1 && newQty <= item.stock) {
      dispatch({
        type: "UPDATE_CART_ITEM",
        payload: { _id: item._id, qty: newQty },
      });
    }
  };

  
  const handleRemoveItem = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  };


  const handleClearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <div className="cartitems-container">
      <div className="cartitems-header">
        <h2 className="cartitems-heading">Shopping Cart</h2>
        {cart.length > 0 && (
          <button className="btn-clear-cart" onClick={handleClearCart}>
            Clear Cart
          </button>
        )}
      </div>

      <div className="cartitems-content">
        <div className="cartitems-list">
          {cart.length === 0 ? (
            <div className="empty-cart-container">
              <p className="empty-cart-message">Your cart is empty.</p>
              <p className="empty-cart-submessage">Add some books to get started!</p>
            </div>
          ) : (
            <>
              <div className="cartitems-table-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span>Action</span>
              </div>
              
              {cart.map((item) => (
                <div className="cartitem-row" key={item._id}>
                  <div className="cartitem-product">
                    <img
                      src={getImageUrl(item.image) || '/assets/default-book.png'}
                      alt={item.name || item.title}
                      className="cartitem-image"
                    />
                    <div className="cartitem-info">
                      <h4 className="cartitem-name">{item.name || item.title}</h4>
                      {item.author && <p className="cartitem-author">by {item.author}</p>}
                      <p className="cartitem-category">{item.category}</p>
                    </div>
                  </div>
                  
                  <div className="cartitem-price">
                    Rs.{Number(item.price).toFixed(2)}
                  </div>
                  
                  <div className="cartitem-quantity">
                    <button 
                      className="qty-btn qty-decrease"
                      onClick={() => handleQuantityChange(item, Math.max(1, (item.qty || 1) - 1))}
                      disabled={(item.qty || 1) <= 1}
                    >
                      <MdRemove />
                    </button>
                    <span className="qty-display">{item.qty || 1}</span>
                    <button 
                      className="qty-btn qty-increase"
                      onClick={() => handleQuantityChange(item, Math.min(item.stock, (item.qty || 1) + 1))}
                      disabled={(item.qty || 1) >= item.stock}
                    >
                      <MdAdd />
                    </button>
                  </div>
                  
                  <div className="cartitem-total">
                    Rs.{(Number(item.price) * (item.qty || 1)).toFixed(2)}
                  </div>
                  
                  <div className="cartitem-action">
                    <button
                      className="btn-remove-item"
                      onClick={() => handleRemoveItem(item)}
                      title="Remove item"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cartitems-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Subtotal ({totalItems} items)</span>
              <span>Rs.{total.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>Rs.{total.toFixed(2)}</span>
            </div>
            <button className="btn-proceed-checkout" disabled={cart.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
