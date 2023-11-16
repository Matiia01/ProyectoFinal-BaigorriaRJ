import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Item({ item }) {
  const { id, nombre, precio, imagen } = item;
  const navigate = useNavigate();

  const handleVerDetalles = () => {
    navigate(`/item/${id}`);
  };   

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} alt={nombre} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            Precio: {precio}
          </Card.Text>
          <Button variant="primary" onClick={handleVerDetalles}>
            Ver Detalles
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
