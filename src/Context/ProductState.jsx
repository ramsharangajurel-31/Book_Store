import React, { useReducer, useEffect } from 'react';
import ProductContext from './ProductContext';
import { cartReducer } from './Reducer';
import { getUserIdFromToken, isAuthenticated } from '../utils/authUtils';
import { getCart, saveCart } from '../services/cartService';


const ProductState = (props) => {
  const initialProducts = [/* Your 12 products here (unchanged) */];

  const [state, dispatch] = useReducer(cartReducer, {
    products: initialProducts,
    cart: [],
  });

  // Load products and cart on mount
  useEffect(() => {
    allProduct(); // Replace hardcoded with backend data
    loadCartFromBackend();
  }, []);

  // Debounced saveCart
  useEffect(() => {
    const timeout = setTimeout(() => {
      saveCartToBackend();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [state.cart]);

  const loadCartFromBackend = async () => {
    if (!isAuthenticated()) return;
    try {
      const token = localStorage.getItem('auth-token');
      const userId = getUserIdFromToken(token);
      if (!userId) return;

      const cartData = await getCart(userId);
      if (cartData && cartData.items) {
        
        const transformedItems = cartData.items.map(item => ({
          _id: item.productId,
          name: item.title,
          title: item.title,
          author: item.author || '',
          price: item.price,
          qty: item.qty,
          stock: item.stock
        }));
        dispatch({ type: 'SET_CART', payload: transformedItems });
      }
    } catch (error) {
      console.error("Failed to load cart from backend", error);
    }
  };

  const saveCartToBackend = async () => {
    if (!isAuthenticated() || state.cart.length === 0) return;
    try {
      const token = localStorage.getItem('auth-token');
      const userId = getUserIdFromToken(token);
      if (!userId) return;

      await saveCart(userId, state.cart);
    } catch (error) {
      console.error("Failed to save cart to backend", error);
    }
  };

  const allProduct = async () => {
    try {
      const response = await fetch('https://book-store-61ip.onrender.com/api/products/books', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token') || '',
        }
      });

      if (response.status === 401) {
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        window.location.href = '/login';
        return;
      }

      const data = await response.json();
      dispatch({ type: 'SET_PRODUCTS', payload: data });
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  const editProduct = async (id, updateData) => {
    try {
      const response = await fetch(`https://book-store-61ip.onrender.com/api/products/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
        },
        body: JSON.stringify(updateData),
      });

      if (response.status === 401) {
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        window.location.href = '/login';
        return;
      }

      await response.json();
      allProduct();
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://book-store-61ip.onrender.com/api/products/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
        },
      });

      if (response.status === 401) {
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        window.location.href = '/login';
        return;
      }

      await response.json();
      allProduct(); // Refresh list
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const addToCart = (product) => {
    // Ensure product has qty property when added to cart
    const productWithQty = {
      ...product,
      qty: product.qty || 1 // Default to 1 if qty is not set
    };
    dispatch({ type: 'ADD_TO_CART', payload: productWithQty });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        allProduct,
        editProduct,
        deleteProduct,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
