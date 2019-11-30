import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import VendorArea from './components/VendorArea';
import ParkingSlotArea from './components/ParkingSlotArea';
import './App.css';
import { getVendorData, getParkingData, emptyCart } from './redux/actions';

const AppBase = ({
  vendors, parkings, fetchVendors, fetchParkings, cart, emptyCartAction,
}) => {
  useEffect(() => {
    fetchVendors();
    fetchParkings();
  }, [fetchVendors, fetchParkings]);

  return (
    <Container>
      <Row>
        {vendors.map(vendor => (<VendorArea key={vendor.id} {...vendor} />))}
      </Row>
      <Row>
        {parkings.map(p => (<ParkingSlotArea key={p.id} {...p} />))}
      </Row>
      Total:
      {cart.price}
      {'€ '}
      Items:
      {cart.items}
      {' '}
      <Button onClick={emptyCartAction} variant="secondary">Svuota</Button>
    </Container>
  );
};

AppBase.propTypes = {
  vendors: PropTypes.arrayOf(PropTypes.shape()),
  parkings: PropTypes.arrayOf(PropTypes.shape()),
  fetchVendors: PropTypes.func.isRequired,
  fetchParkings: PropTypes.func.isRequired,
  cart: PropTypes.shape(),
  emptyCartAction: PropTypes.func.isRequired,
};

AppBase.defaultProps = {
  vendors: [],
  parkings: [],
  cart: { price: 0, items: 0 },
};

const mapStateToProps = state => ({
  vendors: [...state.vendor.vendors],
  parkings: [...state.parking.parkings],
  cart: { ...state.cart },
});

const mapDispatchToProps = {
  fetchVendors: getVendorData,
  fetchParkings: getParkingData,
  emptyCartAction: emptyCart,
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppBase);
export default App;
