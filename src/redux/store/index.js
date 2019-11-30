/* eslint-disable no-unused-vars */
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
import reducers from '../reducers';
import mySaga from '../saga';

const whitelistPaths = [];
const sagaMiddleware = createSagaMiddleware();
const asyncLocalStorage = {
  setItem(key, value) {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, value);
    });
  },
  getItem(key) {
    return Promise.resolve().then(() => localStorage.getItem(key));
  },
};

const persistConfig = {
  key: 'root',
  storage: asyncLocalStorage,
  whitelist: whitelistPaths,
  transforms: [
    // createWhitelistFilter('pairing', ['isPaired']),
    // createWhitelistFilter('login', ['loggedUser']),
    // createWhitelistFilter('kitchen', ['viewedOrders']),
  ],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(mySaga);

const persistor = persistStore(store);

export { store, persistor };
