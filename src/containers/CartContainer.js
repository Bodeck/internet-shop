import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartItemsList from '../components/cart/CartItemsList';
import { removeFromCart, addCartItemQty, reduceCartItemQty } from '../actions/cart';

const CartContainer = ({ removeFromCart, products, addedIds, quantityPerId, addCartItemQty, reduceCartItemQty }) => {
  const cartProducts = products.filter((product) =>
    addedIds.find(
      (item) => item === product.id));
  console.log(cartProducts);
  const cartProductsWithQty = cartProducts.map((product) => ({ ...product, quantity: quantityPerId[product.id] }));
  console.log(cartProductsWithQty);

  return (
    <CartItemsList
      removeFromCart={removeFromCart}
      cartProducts={cartProductsWithQty}
      addCartItemQty={addCartItemQty}
      reduceCartItemQty={reduceCartItemQty} />
  );
};

CartContainer.propTypes = {
  products: PropTypes.array.isRequired,
  addedIds: PropTypes.array.isRequired,
  quantityPerId: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addCartItemQty: PropTypes.func.isRequired,
  reduceCartItemQty: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products,
  addedIds: state.cart.addedIds,
  quantityPerId: state.cart.quantityPerId
});

const mapDispatchToProps = {
  removeFromCart,
  reduceCartItemQty,
  addCartItemQty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);