import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ item, addToCart }) {
  if (!item) {
    return <p>No se encontró ningún producto</p>;
  }

  const { nombre, precio, descripcion, imagen } = item;

  const handleAddToCart = (count) => {
    addToCart(item, count);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: {precio}</p>
      <p>{descripcion}</p>
      <img src={imagen} alt={nombre} />

      {/* Agrega el componente ItemCount aquí */}
      <ItemCount stock={10} onAdd={handleAddToCart} />
    </div>
  );
}

export default ItemDetail;
