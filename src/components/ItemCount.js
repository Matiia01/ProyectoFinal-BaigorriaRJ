// ItemCount.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(Number(count)); // Asegurarse de que la cantidad sea un número
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleDecrement}>
        -
      </Button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <Button variant="secondary" onClick={handleIncrement}>
        +
      </Button>
      <Button variant="primary" onClick={handleAddToCart}>
        Añadir al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
