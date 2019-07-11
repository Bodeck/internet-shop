import getProducts from '../api/shopApi';

// Actions constants
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SORT_BY_NAME = 'SORT_BY_NAME';

// Action creators
export const receiveProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products
  };
};

export const fetchProducts = () => dispatch => {
  getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

export const getAllProducts = () => dispatch => {
  getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

export const sortByName = (direction) => {
  return {
    type: SORT_BY_NAME,
    direction
  };
};

export const sortByPrice = direction => {
  return {
    type: SORT_BY_PRICE,
    direction
  };
};
