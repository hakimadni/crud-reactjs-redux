import axios from "axios";
import { APILink } from "./generalAction";


export const GET_PRODUCT_VARIANT_LIST = "GET_PRODUCT_VARIANT_LIST";
export const GET_PRODUCT_VARIANT_DETAIL = "GET_PRODUCT_VARIANT_DETAIL";
export const POST_PRODUCT_VARIANT_CREATE = "POST_PRODUCT_VARIANT_CREATE";
export const PUT_PRODUCT_VARIANT_UPDATE = "PUT_PRODUCT_VARIANT_UPDATE";
export const DELETE_PRODUCT_VARIANT = "DELETE_PRODUCT_VARIANT";

export const getProductVariantList = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Product_Variant")
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
            type:GET_PRODUCT_VARIANT_LIST,
            payload:{
                data: response.data,
                errorMessage: false
            }
        })
      })
      .catch(function (error) {
        // handle error
        dispatch({
            type:GET_PRODUCT_VARIANT_LIST,
            payload:{
                data: false,
                errorMessage: error.message
            }
        })
      })
  };
};

export const postProductVariantCreate = (data) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .post(APILink+"Product_Variant", data)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
            type:POST_PRODUCT_VARIANT_CREATE,
            payload:{
                data: response.data,
                errorMessage: false
            }
        })
      })
      .catch(function (error) {
        // handle error
        dispatch({
            type:POST_PRODUCT_VARIANT_CREATE,
            payload:{
                data: false,
                errorMessage: error.message
            }
        })
      })
  };
};

export const putProductVariantUpdate = (data, id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .put(APILink+"Product_Variant/"+id, data)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
            type:PUT_PRODUCT_VARIANT_UPDATE,
            payload:{
                data: response.data,
                errorMessage: false
            }
        })
      })
      .catch(function (error) {
        // handle error
        dispatch({
            type:PUT_PRODUCT_VARIANT_UPDATE,
            payload:{
                data: false,
                errorMessage: error.message
            }
        })
      })
  };
};

export const deleteProductVariantCreate = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type:POST_PRODUCT_VARIANT_CREATE,
      payload:{
          data: false,
          errorMessage: false
      }
  })
  };
};

export const deleteProductVariantDetails = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type:GET_PRODUCT_VARIANT_DETAIL,
      payload:{
          data: false,
          errorMessage: false
      }
  })
  };
};


export const deleteProductVariant = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type:GET_PRODUCT_VARIANT_DETAIL,
      payload:{
          data: false,
          errorMessage: false
      }
  })
  };
};