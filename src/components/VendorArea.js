import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './VendorArea.css';


export default function VendorArea() {
  const [show, setShow] = useState(false);
  return (
    <Card>
      <Container style={{ display: 'flex' }}>

        <Card.Body>
          <Card.Title className="row">
          Prenota il tuo parcheggio a Milano Malpensa
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
              <ListGroup.Item>
                  Posto auto della tipologia selezionata
              </ListGroup.Item>
              <ListGroup.Item>Aperto 7 giorni su 7</ListGroup.Item>
              <ListGroup.Item>Cassa presiedata 24h</ListGroup.Item>
              <ListGroup.Item>Assistenza 24h</ListGroup.Item>
              <ListGroup.Item>
                  Ripristino gratuito del calo batteria della tua auto
              </ListGroup.Item>
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
