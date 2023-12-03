import {
  GET_PRODUCT_LIST,
  POST_PRODUCT_CREATE,
  PUT_PRODUCT_UPDATE,
  DELETE_PRODUCT,
} from "../actions/productAction";

let initialState = {
  getProductsList: false,
  errorUsersList: false,
  responseData: false,
  errorResponseData: false,
  title: "RestFul  API  Test",
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        getProductsList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };

    case POST_PRODUCT_CREATE:
      return {
        ...state,
        responseData: action.payload.data,
        errorResponseData: action.payload.errorMessage,
      };

    case PUT_PRODUCT_UPDATE:
      return {
        ...state,
        responseData: action.payload.data,
        errorResponseData: action.payload.errorMessage,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        responseData: false,
        errorResponseData: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default products;