import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
  return (
    <nav className="header">
      <h1>{props.pageName}</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="contact">Contact</Link>
        <Link to="cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Header;