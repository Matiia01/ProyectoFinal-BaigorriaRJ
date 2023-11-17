// Cart.js
import React, { useEffect, useState } from 'react';
import { useCart } from '../CartContext';

function Cart() {
  const { cartList, removeItem, clear } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartList.reduce((total, product) => total + product.price * product.quantity, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartList]);

  const handleConfirmPurchase = () => {
    setIsProcessing(true);
    // Simula un proceso de compra
    setTimeout(() => {
      setIsProcessing(false);
      // Agrega lógica adicional después de la compra
    }, 3000);
  };

  const handleEmptyCart = () => {
    // Llama a la función clear para vaciar el carrito
    clear();
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cartList.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cartList.map((product) => (
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
                      onClick={() => removeItem(product.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p>Precio total del carrito: ${totalPrice}</p>

          {/* Botón para confirmar compra */}
          <button className="btn btn-success" onClick={handleConfirmPurchase} disabled={isProcessing}>
            Confirmar Compra
          </button>

          {/* Botón para vaciar el carrito */}
          <button className="btn btn-danger" onClick={handleEmptyCart} disabled={isProcessing}>
            Vaciar Carrito
          </button>

          {/* Mensaje de compra en proceso */}
          {isProcessing && <p>Tu compra está siendo procesada...</p>}
        </div>
      )}
    </div>
  );
}

export default Cart;
