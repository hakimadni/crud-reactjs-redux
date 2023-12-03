import {
  POST_TRANSACTION_CREATE,
  DELETE_TRANSACTION,
} from "../actions/transactionAction";

let initialState = {
  responseData: false,
  errorResponseData: false,
  title: "RestFul  API  Test",
};

const transactions = (state = initialState, action) => {
  switch (action.type) {

    case POST_TRANSACTION_CREATE:
      return {
        ...state,
        responseData: action.payload.data,
        errorResponseData: action.payload.errorMessage,
      };

    case POST_TRANSACTION_CREATE:
      return {
        ...state,
        responseData: action.payload.data,
        errorResponseData: action.payload.errorMessage,
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        responseData: false,
        errorResponseData: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default transactions;
