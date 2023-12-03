import axios from "axios";

export const GET_PRODUCT_VARIANT = "GET_PRODUCT_VARIANT";
export const GET_PRODUCT_CATEGORY = "GET_PRODUCT_CATEGORY";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_TRANSACTION = "GET_TRANSACTION";

export const GET_PRODUCT_VARIANT_LIST = "GET_PRODUCT_VARIANT_LIST";
export const GET_PRODUCT_CATEGORY_LIST = "GET_PRODUCT_CATEGORY_LIST";
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const GET_TRANSACTION_LIST = "GET_TRANSACTION_LIST";

export const LOAD_DATA ="LOAD_DATA"
export const CLEAR_CREATE ="CLEAR_CREATE"
export const LOGIN ="LOGIN"

export const APILink = "https://localhost:44321/api/"

//Products
export const getProductsList = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Products")
      .then(function (response) {
        dispatch({
            type:GET_PRODUCT_LIST,
            payload:{
                data: response.data,
                errorMessage: false
            }
        })
      })
      .catch(function (error) {
        // handle error
        dispatch({
            type:GET_PRODUCT_LIST,
            payload:{
                data: false,
                errorMessage: error.message
            }
        })
      })
  };
};

export const getProductDetails = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Products/"+id)
      .then(function (response) {
        // handle success
        dispatch({
            type:GET_PRODUCT,
            payload:{
                data: response.data,
                errorMessage: false
            }
        })
      })
      .catch(function (error) {
        // handle error
        dispatch({
            type:GET_PRODUCT,
            payload:{
                data: false,
                errorMessage: error.message
            }
        })
      })
  };
};

export const loadData = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Values")
      .then(function (response) {
        // handle success
        dispatch({
            type:LOAD_DATA,
            payload:{
                data: response.data,
                errorMessage: false
            }
        })
      })
      .catch(function (error) {
        // handle error
        dispatch({
            type:LOAD_DATA,
            payload:{
                data: false,
                errorMessage: error.message
            }
        })
      })
  };
};

//Product Variants
export const getProductVariantsList = () => {
  return (dispatch) => {
    axios
      .get(APILink+"Product_Variant")
      .then(function (response) {
        dispatch({
          type: GET_PRODUCT_VARIANT_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_PRODUCT_VARIANT_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getProductVariantDetails = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Product_Variant/" + id)
      .then(function (response) {
        dispatch({
          type: GET_PRODUCT_VARIANT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_PRODUCT_VARIANT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Product Categories
export const getProductCategoriesList = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Product_Category")
      .then(function (response) {
        // handle success
        console.log(response.data);
        dispatch({
          type: GET_PRODUCT_CATEGORY_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_PRODUCT_CATEGORY_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getProductCategoryDetails = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Product_Category/" + id)
      .then(function (response) {
        dispatch({
          type: GET_PRODUCT_CATEGORY,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_PRODUCT_CATEGORY,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


//Transaction
export const getTransactionsList = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Transactions")
      .then(function (response) {
        // handle success
        console.log(response.data);
        dispatch({
          type: GET_TRANSACTION_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_TRANSACTION_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getTransactionDetails = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(APILink+"Transactions/" + id)
      .then(function (response) {
        dispatch({
          type: GET_TRANSACTION,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
        // handle error
        dispatch({
          type: GET_TRANSACTION,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });

      axios
      .get(APILink+"Transaction_Detail/" + id)
      .then(function (response) {
        dispatch({
          type: GET_PRODUCT_VARIANT_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
        // handle error
        dispatch({
          type: GET_PRODUCT_VARIANT_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//delete state List
export const deleteProductsList = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type:GET_PRODUCT_LIST,
      payload:{
          data: false,
          errorMessage: false
      }
  })
  };
};

export const deleteProductCategoriesList = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type: GET_PRODUCT_CATEGORY_LIST,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteProductVariantsList = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type: GET_PRODUCT_VARIANT_LIST,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteCreate = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    dispatch({
      type:CLEAR_CREATE,
      payload:{
          data: false,
          errorMessage: false
      }
  })
  };
};

export const logIn= (nama) => {
  return (dispatch) => {
    sessionStorage.setItem("loggedIn", true);
    sessionStorage.setItem("username", nama);
    // Make a request for a user with a given ID
    dispatch({
      type:LOGIN,
      payload:{
          data: nama,
          success: true
      }
  })
  };
};


export const logOut= () => {
  return (dispatch) => {
    sessionStorage.setItem("loggedIn", false);
    sessionStorage.setItem("username", "");
    // Make a request for a user with a given ID
    dispatch({
      type:LOGIN,
      payload:{
          data: false,
          success: false
      }
  })
  };
};