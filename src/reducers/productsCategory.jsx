import {
  POST_PRODUCT_CATEGORY_CREATE,
  PUT_PRODUCT_CATEGORY_UPDATE,
  DELETE_PRODUCT_CATEGORY,
} from "../actions/productCategoryAction";

let initialState = {
  getProductCategoriesList: false,
  errorUsersList: false,
  responseData: false,
  errorResponseData: false,
  title: "RestFul  API  Test",
};

const productsCategory = (state = initialState, action) => {
  switch (action.type) {

    case POST_PRODUCT_CATEGORY_CREATE:
      return {
        ...state,
        responseData: action.payload.data,
        errorResponseData: action.payload.errorMessage,
      };

    case PUT_PRODUCT_CATEGORY_UPDATE:
      return {
        ...state,
        responseData: action.payload.data,
        errorResponseData: action.payload.errorMessage,
      };

    case DELETE_PRODUCT_CATEGORY:
      return {
        ...state,
        responseData: false,
        errorResponseData: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default productsCategory;
