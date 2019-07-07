import React, { Component } from 'react';
import './Cart.css';
import { CartItemsList } from './CartItemsList';

class Cart extends Component {

  render() {
    return (
      <div className="shopping-cart">
        <header className="shopping-cart-header">
          <h1 className="page-name">Shopping Cart</h1>
        </header>
        <section className="shopping-cart-body">
          <CartItemsList cartItems={this.props.products} />
        </section>
        <div className="row justify-content-end ">
          <div className="cart-summary">
            <input className="discount-code" type="text" placeholder="discount code"></input>
            <div className="total-amount">Total: $ 604.00</div>
            <button className="checkout-btn" href="#">Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}

Cart.defaultProps = {
  products: [
    {
      id: 1,
      name: "Product name 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      basePrice: 219.00,
      imageUrl: "./images/product.png"
    },
    {
      id: 2,
      name: "Product name 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      basePrice: 90.99,
      imageUrl: "./images/product.png"
    },
    {
      id: 3,
      name: "Product name 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      basePrice: 120.00,
      imageUrl: "./images/product.png"
    },

  ]
}

export default Cart;