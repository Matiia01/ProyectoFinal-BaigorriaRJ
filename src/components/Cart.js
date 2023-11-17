import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Agregamos la importación necesaria
import { useCart } from '../CartContext';

function Cart() {
  const { cart, dispatch } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (cart && cart.length > 0) {
        const total = cart.reduce(
          (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
          0
        );
        setTotalPrice(total);
      } else {
        setTotalPrice(0);
      }
    };

    calculateTotalPrice();
  }, [cart]);

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { itemId: productId } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleConfirmPurchase = () => {
    dispatch({ type: 'CLEAR' });
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart && Array.isArray(cart) && cart.length === 0 ? (
        <div>
          <p>El carrito está vacío</p>
          <Link to="/" className="btn btn-primary">
            Ir a la tienda
          </Link>
        </div>
      ) : (
        <div>
          {cart && Array.isArray(cart) && cart.length > 0 ? (
            cart.map((cartItem) => (
              <div key={cartItem.item.id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    {cartItem.item.image && (
                      <img src={cartItem.item.image} alt={cartItem.item.name} className="img-fluid" />
                    )}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{cartItem.item.name}</h5>
                      <p className="card-text">Cantidad: {cartItem.quantity}</p>
                      <p className='card-text'>Precio: ${cartItem.item.price}</p>
                      <p className="card-text">Precio total: ${cartItem.item.price * cartItem.quantity}</p>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(cartItem.item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>E está vacío</p>
          )}
          {cart && Array.isArray(cart) && cart.length > 0 && (
            <div>
              <p>Precio total del carrito: ${totalPrice}</p>
              <button className="btn btn-success" onClick={handleConfirmPurchase}>
                Confirmar Compra
              </button>
              <button className="btn btn-danger" onClick={clearCart}>
                Vaciar Carrito
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
