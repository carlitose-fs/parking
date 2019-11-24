import React from 'react';


import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './App.css';


const App = () => (
  <Provider store={store} persistor={persistor}>
    <Container className="p-3" />
  </Provider>
);

export default App;
