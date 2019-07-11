import { GET_PRODUCTS, SORT_BY_NAME, SORT_BY_PRICE } from '../actions/products';

export const products = (state = [], action) => {
  switch (action.type) {
  case GET_PRODUCTS:
    return action.products;

  case SORT_BY_NAME:
  {
    const sortedProducts = state.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    return sortedProducts;
  }

  case SORT_BY_PRICE:
    return state;
  default:
    return state;
  }
};