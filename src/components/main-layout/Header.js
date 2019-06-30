import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = props => {
  const cartItemsCount = props.cartItemsCount
  
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link className="logo-link" to="/">My Store Name</Link>
          </div>
          <nav className="navbar">
            <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
            <NavLink className="nav-link" exact to="/faq" activeClassName="active">FAQ</NavLink>
            <NavLink className="nav-link" exact to="/contact" activeClassName="active">Contact</NavLink>
            <div className="shopping-cart-wrapper">
            <NavLink className="shopping-cart-link" exact to="/cart" activeClassName="active">
              <FontAwesomeIcon className="shopping-cart-icon" icon={faShoppingBag} size="3x" title="Shopping cart" />
              <span className="shopping-cart-counter">{cartItemsCount}</span>
            </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;