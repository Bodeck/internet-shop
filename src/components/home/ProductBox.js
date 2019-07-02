import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'
import './ProductBox.css';

const ProductBox = props => {
  const imgUrl = 'https://via.placeholder.com/400x200';
  return (
    <div className="col-md-6 col-sm-12">
      <div className="product-box">
        <div className="product-box-header">
          <span className="optional-message">Optional message</span>
          <span className="favourite-marker visible-on-hover">
            <a href="#">
              <FontAwesomeIcon className="favourite-marker-ico" icon={faHeartRegular} />
            </a>
          </span>
        </div>
        <div className="product-box-img-container">
          <Link to={"/product/" + props.product.id}>
            <img src={imgUrl} alt={props.product.name}/>
          </Link>
        </div>
        <div className="product-box-footer">
          <h3 className="product-name change-on-hover">{props.product.name}</h3>
          <div className="footer-bottom">
            <span className="base-price change-on-hover">{props.product.basePrice} $</span>
            <a href="#" className="add-to-cart visible-on-hover">
              <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
              <span> Add to Cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBox;