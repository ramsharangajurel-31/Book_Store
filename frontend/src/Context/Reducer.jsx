export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };

    case 'ADD_TO_CART':
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

    default:
      return state;
  }
};
