import {
  GET_PRODUCT_VARIANT_LIST,
  GET_PRODUCT_CATEGORY_LIST,
  GET_PRODUCT_LIST,
  GET_TRANSACTION_LIST,
  GET_PRODUCT_VARIANT,
  GET_PRODUCT_CATEGORY,
  GET_PRODUCT,
  GET_TRANSACTION,
  CLEAR_CREATE,
  LOGIN,
  LOAD_DATA,
} from "../actions/generalAction";

let initialState = {
  getList: false,
  errorList: false,
  getDetail: false,
  errorUser: false,
  errorResponseData: false,
  errorResponseData: false,
  title: "RestFul  API  Test",
  mode: false,
  loggedIn: false,
  username: false,
};

const generals = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        mode: "DATA",
        getList: action.payload.data,
        errorList: action.payload.errorMessage,
      };
    
    case GET_PRODUCT_LIST:
      return {
        ...state,
        mode: "Product",
        getList: action.payload.data,
        errorList: action.payload.errorMessage,
      };

    case GET_PRODUCT_CATEGORY_LIST:
      return {
        ...state,
        mode: "Product Category",
        getList: action.payload.data,
        errorList: action.payload.errorMessage,
      };

    case GET_PRODUCT_VARIANT_LIST:
      return {
        ...state,
        mode: "Product Variant",
        getList: action.payload.data,
        errorList: action.payload.errorMessage,
      };

      case GET_TRANSACTION_LIST:
        return {
          ...state,
          mode: "Transaction",
          getList: action.payload.data,
          errorList: action.payload.errorMessage,
        };
  
    case GET_PRODUCT:
      return {
        ...state,
        getDetail: action.payload.data,
        errorDetail: action.payload.errorMessage,
      };

    case GET_PRODUCT_CATEGORY:
      return {
        ...state,
        getDetail: action.payload.data,
        errorDetail: action.payload.errorMessage,
      };

    case GET_PRODUCT_VARIANT:
      return {
        ...state,
        getDetail: action.payload.data,
        errorDetail: action.payload.errorMessage,
      };

      case GET_TRANSACTION:
        return {
          ...state,
          getDetail: action.payload.data,
          errorDetail: action.payload.errorMessage,
        };
  
    case CLEAR_CREATE:
      return {
        ...state,
        getDetail: action.payload.data,
        errorDetail: action.payload.errorMessage,
      };

    case LOGIN:
      return {
        ...state,
        loggedIn: action.payload.success,
        username: action.payload.data,
      };

    default:
      return state;
  }
};

export default generals;
