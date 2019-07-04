import React from 'react';
import ProductBox from './ProductBox';

export const ProductList = props => {
  const favouriteList =[1,4];
  const productList = props.products.map(product => {
    let isFavourite = favouriteList.includes(product.id);
    return (
      <ProductBox key={product.id} product={product} isFavourite={isFavourite}/>
    )
  })

  return (
    <div className="product-list">
      <div className="row">
      {productList}
      </div>
    </div>
  )
}