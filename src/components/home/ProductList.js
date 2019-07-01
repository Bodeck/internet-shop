import React from 'react';
import ProductBox from './ProductBox';

export const ProductList = props => {
  const productList = props.products.map(product => {
    return (
      <ProductBox key={product.id} product={product}/>
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