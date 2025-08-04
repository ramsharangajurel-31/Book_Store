export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };

    case 'ADD_TO_CART':
     
      const existingItemIndex = state.cart.findIndex(item => item._id === action.payload._id);
      if (existingItemIndex >= 0) {
       
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          qty: (updatedCart[existingItemIndex].qty || 1) + 1
        };
        return { ...state, cart: updatedCart };
      }

      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((p) => p._id !== action.payload._id)
      };

    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: Number(action.payload.qty) }
            : item
        ),
      };

    case 'SET_CART':
      return { ...state, cart: action.payload };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
};
