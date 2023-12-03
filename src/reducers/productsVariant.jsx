import {
  GET_PRODUCT_VARIANT_DETAIL,
  GET_PRODUCT_VARIANT_LIST,
  POST_PRODUCT_VARIANT_CREATE,
  PUT_PRODUCT_VARIANT_UPDATE,
  DELETE_PRODUCT_VARIANT,
} from "../actions/productVariantAction";

let initialState = {
  getProductsList: false,
  errorUsersList: false,
  getUser: false,
  errorUser: false,
  responseData: false,
  errorResponseData: false,
  title: "RestFul  API  Test",
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_VARIANT_LIST:
      return {
        ...state,
        getProductsList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };

    case GET_PRODUCT_VARIANT_DETAIL:
      return {
        ...state,
        getUser: action.payload.data,
        errorUser: action.payload.errorMessage,
      };

    case POST_PRODUCT_VARIANT_CREATE:
      return {
        ...state,
        responseData: action.payload.data,
        errorResponseData: action.payload.errorMessage,
      };

    case PUT_PRODUCT_VARIANT_UPDATE:
      return {
        ...state,
        responseData: action.payload.data,
        errorResponseData: action.payload.errorMessage,
      };

    case DELETE_PRODUCT_VARIANT:
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
