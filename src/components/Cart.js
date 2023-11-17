// En Cart.js
import React, { useEffect, useState } from 'react';

function Cart({ cart, removeFromCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calcula el precio total cada vez que cambia el carrito
    const calculateTotalPrice = () => {
      const total = cart.reduce((total, product) => total + product.price * product.quantity, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cart]);

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Cantidad: {product.quantity}</p>
                    <p className='card-text'>Precio: ${product.price}</p>
                    <p className="card-text">Precio total: ${product.price * product.quantity}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p>Precio total del carrito: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
