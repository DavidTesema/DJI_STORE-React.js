import * as actionType from "./ShoppingTypes";

export const addToCart = (itemId) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};
export const removeFromCart = (itemId) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};
export const adjustQty = (itemId, value) => {
  return {
    type: actionType.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionType.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

