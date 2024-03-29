import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';


export default function ParkingSlotArea({ indoor, insurance, price }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: '15rem', height: '14rem' }}>
      <Card.Body>
        <Card.Title>
          Prezzo
          {' '}
          {price}
            €
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {indoor && 'Posto Auto coperto'}
            {!indoor && 'Senza posto Auto coperto'}
          </ListGroup.Item>
          <ListGroup.Item>
            {insurance && 'Assicurazione inclusa'}
            {!insurance && 'Assicurazione esclusa'}
          </ListGroup.Item>
        </ListGroup>
        <Button onClick={() => { dispatch(addToCart(price)); }} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

ParkingSlotArea.propTypes = {
  indoor: PropTypes.bool,
  insurance: PropTypes.bool,
  price: PropTypes.number,
};

ParkingSlotArea.defaultProps = {
  indoor: false,
  insurance: false,
  price: 0,
};
