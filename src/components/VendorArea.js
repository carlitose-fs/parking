import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

import './VendorArea.css';


export default function VendorArea({ departureAirport, features }) {
  const [show, setShow] = useState(false);
  return (
    <Card>
      <Container style={{ display: 'flex' }}>

        <Card.Body>
          <Card.Title className="row">
          Prenota il tuo parcheggio a
            {' '}
            {departureAirport}
          </Card.Title>
          {show && (
          <Card.Subtitle className="row">
            Sono inclusi anche i seguenti servizi:
          </Card.Subtitle>
          )}
          {show && (
          <Row>
            <Card.Img src="park.png" className="col-5"></Card.Img>
            <ListGroup variant="flush" className="col-4">
              {features.map(f => (<ListGroup.Item>{f}</ListGroup.Item>))}
            </ListGroup>
          </Row>
          )}
          <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="primary"
              onClick={() => {
                setShow(!show);
              }}
            >
          Mostra Dettagli
            </Button>
          </Container>
        </Card.Body>
      </Container>
    </Card>
  );
}

VendorArea.propTypes = {
  departureAirport: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
};

VendorArea.defaultProps = {
  departureAirport: '',
  features: [],
};
