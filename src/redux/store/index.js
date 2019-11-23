import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
import reducers from '../reducers';

const store = createStore(reducers);

const persistor = persistStore(store);

export { store, persistor };
