import axios from "axios";
import { APILink } from "./generalAction";

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const GET_PRODUCT = "GET_PRODUCT";
export const POST_PRODUCT_CREATE = "POST_PRODUCT_CREATE";
export const PUT_PRODUCT_UPDATE = "PUT_PRODUCT_UPDATE";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getProductList = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Products")
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: GET_PRODUCT_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_PRODUCT_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const postProductCreate = (data) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .post(APILink+"Products", data)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: POST_PRODUCT_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: POST_PRODUCT_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putProductUpdate = (data, id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .put(APILink+"Products/" + id, data)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: PUT_PRODUCT_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: PUT_PRODUCT_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteProductCreate = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type: POST_PRODUCT_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteProductDetails = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type: GET_PRODUCT,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    try {
      axios.delete(`APILinkapi/Products/${id}`);

      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });

      // Return a resolved Promise
      return Promise.resolve();
    } catch (error) {
      // Handle errors
      console.error("Error deleting product :", error);
    }
  };
};
