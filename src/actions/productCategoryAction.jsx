import axios from "axios";
import { APILink } from "./generalAction";

export const GET_PRODUCT_CATEGORY_DETAIL = "GET_PRODUCT_CATEGORY_DETAIL";
export const POST_PRODUCT_CATEGORY_CREATE = "POST_PRODUCT_CATEGORY_CREATE";
export const PUT_PRODUCT_CATEGORY_UPDATE = "PUT_PRODUCT_CATEGORY_UPDATE";
export const DELETE_PRODUCT_CATEGORY = "DELETE_PRODUCT_CATEGORY";


export const postProductCategoryCreate = (data) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .post(
        APILink+"Product_Category",
        data
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: POST_PRODUCT_CATEGORY_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: POST_PRODUCT_CATEGORY_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putProductCategoryUpdate = (data, id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .put(
        APILink+"Product_Category/" +
          id,
        data
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: PUT_PRODUCT_CATEGORY_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: PUT_PRODUCT_CATEGORY_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteProductCategoryCreate = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type: POST_PRODUCT_CATEGORY_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteProductCategoryDetails = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type: DELETE_PRODUCT_CATEGORY,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteProductCategory = (id) => {
  return async (dispatch) => {
    try {
      axios.delete(`APILinkapi/Product_Category/${id}`);

      dispatch({
        type: DELETE_PRODUCT_CATEGORY,
        payload: id,
      });

      // Return a resolved Promise
      return Promise.resolve();
    } catch (error) {
      // Handle errors
      console.error("Error deleting product category:", error);
      return Promise.reject(error);
    }
  };
};
