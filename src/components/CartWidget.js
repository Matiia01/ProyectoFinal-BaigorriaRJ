import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

function CartWidget() {
  const { cart } = useCart();

  // Verifica si el carrito está definido y no está vacío antes de usar reduce
  const cartCount = cart && Array.isArray(cart) ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <Link to="/cart" className="btn btn-primary">
      <i className="fa fa-shopping-cart"></i>
      {cartCount > 0 && <span className="cart-item-count">{cartCount}</span>}
    </Link>
  );
}

export default CartWidget;
