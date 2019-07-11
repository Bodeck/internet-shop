import React from 'react';
import PropTypes from 'prop-types';
import ProductBox from './ProductBox';

export const ProductList = props => {
  const favouriteList =[1,4];
  const productList = props.products.map(product => {
    let isFavourite = favouriteList.includes(product.id);
    return (
      <ProductBox key={product.id} product={product} isFavourite={isFavourite} onAddToCartClick={props.addToCart}/>
    );
  });

  return (
    <div className="product-list">
      <div className="row">
        {productList}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};