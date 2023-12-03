import { postTransactionCreate } from "./transactionAction";

export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: { item },
});

export const updateCartItem = (itemId, quantity) => ({
  type: UPDATE_CART_ITEM,
  payload: { itemId, quantity },
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: { itemId },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const processCheckout = (carts, username) => {
  // Dispatch actions for creating a transaction and its details
  return (dispatch) => {
    dispatch(postTransactionCreate( carts, username ));
    console.log(carts);
    dispatch(clearCart());
  };
};