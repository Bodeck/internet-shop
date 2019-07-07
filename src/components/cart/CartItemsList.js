import React from 'react';
import { CartItem } from './CartItem';
import './CartItemsList.css';

export const CartItemsList = props => {

  return (
    <ul className="cart-items-list">
      {props.cartItems.map(item => {
        return <CartItem key={item.id} product={item} />
      })}
    </ul>
  )
}