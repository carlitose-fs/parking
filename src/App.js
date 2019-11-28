import React from 'react';
import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import VendorArea from './components/VendorArea';
import ParkingSlotArea from './components/ParkingSlotArea';
import './App.css';


const App = () => (
  <Provider store={store} persistor={persistor}>
    <Container>
      <VendorArea />
      <ParkingSlotArea />
    </Container>
  </Provider>
);

export default App;
