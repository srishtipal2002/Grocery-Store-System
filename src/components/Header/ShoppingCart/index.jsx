// Sopping Cart
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ShoppingCart.css';

export default function ShoppingCart(props) {
  const { active } = props;
  return (
    <div className={`shopping-cart ${active ? 'active' : ''}`}>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        <img src="image/cart-img-1.png" alt="Product" />
        <div className="content">
          <h3>watermelon</h3>
          <span className="price">₹ 120/-</span>
          <span className="quantity">qty: 1 Kg</span>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        <img src="image/cart-img-2.png" alt="Product" />
        <div className="content">
          <h3>onion</h3>
          <span className="price">₹ 80/-</span>
          <span className="quantity">qty: 1 Kg</span>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        <img src="image/cart-img-3.png" alt="Product" />
        <div className="content">
          <h3>chicken</h3>
          <span className="price">₹ 210/-</span>
          <span className="quantity">qty: 500 Gm</span>
        </div>
      </div>
    </div>
  );
}
ShoppingCart.propTypes = {
  activeShoppingCart: PropTypes.bool,
}.isRequired;
