import axios from '../axios-products';

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const ADD_PRODUCT_INIT = 'ADD_PRODUCT_INIT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCS_SUCCESS';
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCS_FAIL';

export const FETCH_PRODUCTS_INIT = 'FETCH_PRODUCTS_INIT';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

// you can access state here, and maybe store old state before dispatch -> getState

// [to do] add initProducts -> fetched from firebase (response.data), for that we need another action (setProducts)

// [to od] add error action

// [to do] add remove action

export const addProductInit = (product) => {
    return dispatch => {
        axios.post('/products.json', product )
            .then(response => {
                console.log(response.data);
                dispatch(addProductSuccess(product));
            })
            .catch(error => {
                dispatch(addProductFail(error));
            })
    }
};

export const addProductSuccess = (product) => {
    return {
        type: ADD_PRODUCT_SUCCESS,
        product: product
    }
};

export const  addProductFail = (error) => {
    return {
        type: ADD_PRODUCT_FAIL,
        error: error
    }
};

export const fetchProductsInit = () => {
  return dispatch => {
      axios.get('products.json')
          .then (res => {
              const fetchedProducts = [];
              for (let key in res.data) {
                  fetchedProducts.push({
                      ...res.data[key],
                      id: key
                  });
              }
              dispatch(fetchProductsSuccess(fetchedProducts));
          }).catch(error => {
              dispatch(fetchProductsFail(error));
      })
  }
};

export const fetchProductsSuccess = (products) => {
  return {
      type: FETCH_PRODUCTS_SUCCESS,
      products: products
  }
};

export const  fetchProductsFail = (error) => {
  return {
      type: FETCH_PRODUCTS_FAIL,
      error: error
  }
};