import * as actionType from "./ShoppingTypes";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_ALL_PRODUCT:
      return { ...state, products: action.payload };
    case actionType.ADD_TO_CART:
      const item = state.products.find(
        (prod) => prod._id === action.payload
        );
        console.log(action.payload);
      const inCart = state.cart.find((item) =>
        item._id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
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
    case actionType.LOAD_CURRENT_ITEM:
      return { ...state, currentItem: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
