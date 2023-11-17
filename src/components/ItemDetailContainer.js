import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import products from '../data';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const { dispatch } = useCart();

  const handleAddToCart = (product, quantity) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        item: product,
        quantity: quantity,
      },
    });
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
          <ItemCount stock={10} onAdd={(count) => handleAddToCart(product, count)} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
