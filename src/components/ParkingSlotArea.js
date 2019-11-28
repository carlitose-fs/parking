import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ParkingSlotArea() {
  return (
    <Card style={{ width: '15rem', height: '14rem' }}>
      <Card.Body>
        <Card.Title>Prezzo 50€</Card.Title>
        <Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>
                  Posto Auto coperto
            </ListGroup.Item>
            <ListGroup.Item>Assicurazione inclusa</ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}
