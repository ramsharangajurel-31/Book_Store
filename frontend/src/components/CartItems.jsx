import React, { useContext } from 'react';
import ProductContext from '../Context/ProductContext';
import { MdDelete } from "react-icons/md";


const CartItems = () => {
  const { state: { cart }, dispatch } = useContext(ProductContext);
  const total = cart.reduce((acc, item) => acc + (Number(item.price) || 0) * (Number(item.qty) || 0), 0);

  return (
    <div className="cartitems-container">
      <h2 className="cartitems-heading">Shopping Cart</h2>
      <div className="cartitems-list">
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="cartitem-card" key={item._id}>
              <img
                src={item.image || '/assets/default-book.png'}
                alt={item.name}
                className="cartitem-image"
              />
              <div className="cartitem-details">
                <div className="cartitem-info-top">
                  <h3 className="cartitem-name">{item.name}</h3>
                  <p className="cartitem-author"><strong>Author:</strong> {item.author}</p>
                  <p className="cartitem-price">Price: Rs.{item.price}</p>
                  <p className="cartitem-stock">Stock: {item.stock}</p>
                </div>
                <div className="cartitem-info-bottom">
                  <label htmlFor={`qty-select-${item._id}`}>Qty:</label>
                  <select
                    id={`qty-select-${item._id}`}
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_CART_ITEM",
                        payload: { _id: item._id, qty: e.target.value },
                      })
                    }
                    className="cartitem-qty-select"
                  >
                    {[...Array(item.stock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn-remove-cartitem"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })
                    }
                  >
                    <MdDelete /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cartitems-summary">
        <div>Total items: {cart.length}</div>
        <h4>Sub-Total: Rs.{total.toFixed(2)}</h4>
        <button className="btn-proceed-checkout" disabled={cart.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
