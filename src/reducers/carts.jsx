// cartReducer.js
import {
    ADD_TO_CART,
    UPDATE_CART_ITEM,
    REMOVE_FROM_CART,
    CLEAR_CART,
  } from "../actions/cartAction";
  
  const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {

      case ADD_TO_CART: {
        const newItem = action.payload.item;
        newItem.quantity = 1;
        const existingItemIndex = state.items.findIndex(
          (item) => item.code === newItem.id
        );
      
        const currDate = new Date().toLocaleDateString();
        const currTime = new Date().toLocaleTimeString();
        const formattedDate = currDate + " " + currTime;
      
        const cartItem = {
          ...newItem,
          quantity: 1,
          created_at: formattedDate,
          subtotal: newItem.price * 1, // Initial subtotal based on quantity 1
        };
      
        if (existingItemIndex !== -1) {
          // Item already exists, update quantity and subtotal
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += cartItem.quantity;
          updatedItems[existingItemIndex].subtotal =
            updatedItems[existingItemIndex].price * updatedItems[existingItemIndex].quantity;
      
          return {
            ...state,
            items: updatedItems,
          };
        } else {
          return {
            ...state,
            items: [...state.items, cartItem],
          };
        }
      }
      
      case UPDATE_CART_ITEM:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.itemId
              ? {
                  ...item,
                  quantity: action.payload.quantity,
                  subtotal: item.price * action.payload.quantity,
                }
              : item
          ),
        };
      
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.itemId),
        };
  
      case CLEAR_CART:
        return {
          ...state,
          items: [],
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  