import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext'; // Importa el hook useCart
import products from '../data';

function ItemDetailContainer() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((product) => product.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    // Parsea la cantidad a entero antes de agregar al carrito
    addItem(product, parseInt(quantity, 10) || 1);
    console.log('Producto añadido al carrito:', product, 'Cantidad:', quantity);
  };


  return (
    <div className="container">
      <h2>Detalles del Producto {product.name}</h2>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={`Imagen de ${product.name}`} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Precio: ${product.price}</p>
          <p className="card-text">Categoría: {product.category}</p>
          <p className="card-text">Prestaciones: {product.brand}</p>
          <p className="card-text">Peso: {product.weight}</p>
          <p className="card-text">Colores: {product.color}</p>
          <div className="form-group">
            <button onClick={handleAddToCart} className="btn btn-primary">
              Agregar al Carrito
            </button>
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
