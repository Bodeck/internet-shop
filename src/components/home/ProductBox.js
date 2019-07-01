import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import './ProductBox.css';

const ProductBox = props => {
  const imgUrl = 'https://via.placeholder.com/200';
  return (
    <div className="col-md-6 col-sm-12">
      <div className="product-box">
        <div className="product-box-header">
          <span className="optional-message">Optional message</span>
          <span className="favourite-marker visible-on-hover">
            <a href="#">
              <FontAwesomeIcon size="1x" icon={faHeart} />
            </a>
          </span>
        </div>
        <div className="product-box-img-container">
          <Link to={"/product/" + props.product.id}>
            <img src={imgUrl} alt={props.product.name}/>
          </Link>
        </div>
        <div className="product-box-footer">
          <h2 className="product-name change-on-hover">{props.product.name}</h2>
          <div>
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