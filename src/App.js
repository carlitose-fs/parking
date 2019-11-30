import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import VendorArea from './components/VendorArea';
import ParkingSlotArea from './components/ParkingSlotArea';
import './App.css';
import { getVendorData, getParkingData } from './redux/actions';

const AppBase = ({ vendors, parkings, fetchVendors, fetchParkings }) => {
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
    </Container>
  );
};

AppBase.propTypes = {
  vendors: PropTypes.arrayOf(PropTypes.shape()),
  parkings: PropTypes.arrayOf(PropTypes.shape()),
  fetchVendors: PropTypes.func.isRequired,
  fetchParkings: PropTypes.func.isRequired,
};

AppBase.defaultProps = {
  vendors: [],
  parkings: [],
};

const mapStateToProps = state => ({
  vendors: [...state.vendor.vendors],
  parkings: [...state.parking.parkings],
});

const mapDispatchToProps = {
  fetchVendors: getVendorData,
  fetchParkings: getParkingData,
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppBase);
export default App;
