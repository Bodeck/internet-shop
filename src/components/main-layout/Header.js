import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartIcon from 'react-ionicons/lib/IosBasketOutline'
import './Header.css';

const Header = props => {
  const cartItemsCount = props.cartItemsCount

  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="logo">
            <Link className="logo-link" to="/">My Store Name</Link>
          </div>
          <nav className="navbar">
            <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
            <NavLink className="nav-link" exact to="/faq" activeClassName="active">FAQ</NavLink>
            <NavLink className="nav-link" exact to="/contact" activeClassName="active">Contact</NavLink>
              <NavLink className="nav-link shopping-cart-link" exact to="/cart" activeClassName="active">
                <CartIcon className="shopping-cart-icon" fontSize="32px" title="Shopping cart" />
                {cartItemsCount !== 0 ? <span className="shopping-cart-counter">{cartItemsCount}</span> : ""}
              </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;