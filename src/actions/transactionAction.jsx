import axios from "axios";
import { APILink } from "./generalAction";

export const GET_TRANSACTION_DETAIL = "GET_TRANSACTION_DETAIL";
export const POST_TRANSACTION_CREATE = "POST_TRANSACTION_CREATE";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";


export const postTransactionCreate = (data, username) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .post(
        APILink+"Transaction_Detail?username="+username,
        data,
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: POST_TRANSACTION_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: POST_TRANSACTION_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const pay = (id, username) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .put(
        APILink+"Transaction_Detail/"+id+"?username={username}="+username,
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: POST_TRANSACTION_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: POST_TRANSACTION_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteTransactionCreate = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type: POST_TRANSACTION_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteTransactionDetails = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type: GET_TRANSACTION_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteTransaction = (id) => {
  return async (dispatch) => {
    try {
      axios.delete(`APILinkapi/Product_Category/${id}`);

      dispatch({
        type: DELETE_TRANSACTION,
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
