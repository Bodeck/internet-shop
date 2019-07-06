import React from 'react';
import './Product.css';

const Product = ({ match }) => {
  const productId = match.params.id;
  const addToCart = (productId) => {
    console.log(productId)
  }
  return (
    <div className="product-page">
      <div className="product-container">
        <div className="col">
          <div className="product-image-box"></div>
        </div>
        <div className="col">
          <div className="product-details-box">
            <h1 className="product-name">Product</h1>
            <div className="product-price">$69.00</div>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
        </p>
            <button className="add-to-cart"
              onClick={() => addToCart(productId)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;