import React from 'react';
import { Link } from 'react-router-dom'
import CartIcon from 'react-ionicons/lib/IosBasket'
import FavIconOutline from 'react-ionicons/lib/MdHeartOutline'
import FavIcon from 'react-ionicons/lib/MdHeart';
import './ProductBox.css';

const ProductBox = props => {
  const imgUrl = '../../assets/images/product.png';
  const isFavourite = props.isFavourite || false;
  return (
    <div className="col-md-6 col-sm-12">
      <div className="product-box">
        <div className="product-box-header">
          <span className="optional-message">{props.product.advertMessage}</span>
          <span className="favourite-marker visible-on-hover">
            <a href="#">
              {isFavourite ? 
                  <FavIcon className="favourite-marker-ico"/> 
                    : <FavIconOutline />}            
            </a>
          </span>
        </div>
          <Link to={"/product/" + props.product.id}>
        <div className="product-box-img-container">
        </div>
          </Link>
        <div className="product-box-footer">
          <h3 className="product-name change-on-hover">{props.product.name}</h3>
          <div className="footer-bottom">
            <span className="base-price change-on-hover">{props.product.basePrice} $</span>
            <a href="#" className="add-to-cart visible-on-hover">
              <CartIcon className="add-to-cart-icon"/>
              <span> Add to Cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBox;