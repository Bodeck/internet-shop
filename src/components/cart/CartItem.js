import React from 'react';
import './CartItem.css';

export const CartItem = props => {
  const product = props.product;
  
  return (
    <li className="cart-item">
      <div className="row align-items-center">
        <div className="col-2">
          <div className="item-image-box" style={{ backgroundImage: 'url(' + product.imageUrl + ')' }}>
          </div>
        </div>
        <div className="col-10 product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="row">
            <div className="col-9">
              <p className="product-description">{product.description}</p>
            </div>
            <div className="col-1">
              <div className="product-price">${product.basePrice}</div>
            </div>
            <div className="col-2">
              <div className="cart-items-counter">
                <a href="#" className="cart-action-btn">+</a>
                <div>
                  <input className="counter-input" type="text" defaultValue="1"></input>
                </div>
                <a href="#" className="cart-action-btn">-</a>
              </div>
                <a href="#" className="btn-remove">Remove from cart</a>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}