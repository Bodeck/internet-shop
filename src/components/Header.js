import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
  return (
    <header className="header container">
      <div className="logo">
        <Link exact to="/">My Store Name</Link>
      </div>
      <nav className="navbar">
        <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
        <NavLink className="nav-link" exact to="/faq" activeClassName="active">FAQ</NavLink>
        <NavLink className="nav-link" exact to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink className="nav-link" exact to="/cart" activeClassName="active">Cart</NavLink>
      </nav>
    </header>
  );
};

export default Header;