import * as actionType from "./ShoppingTypes";

const INITIAL_STATE = {
  products: [],
  cart: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_ALL_PRODUCT:
      return { ...state, products: action.payload };

    case actionType.ADD_TO_CART:
      const item = state.products.find((prod) => prod._id === action.payload);
      const inCart = state.cart.find((item) =>
        item._id === action.payload ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id && item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionType.REMOVE_FROM_CART:
      console.log(action.payload)
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case actionType.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
