// CartWidget.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

function CartWidget() {
  const { cartList } = useCart();

  const cartCount = cartList.reduce((total, product) => total + product.quantity, 0);

  return (
    <Link to="/cart" className="btn btn-primary">
      <i className="fa fa-shopping-cart"></i>
      {cartCount > 0 && <span className="cart-item-count">{cartCount}</span>}
    </Link>
  );
}

export default CartWidget;
