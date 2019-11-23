import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
import reducers from 'reducers';


// const whitelistPaths = ['pairing', 'login', 'settings', 'kitchen'];

const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: whitelistPaths,
//   transforms: [
//     createWhitelistFilter('pairing', ['isPaired']),
//     createWhitelistFilter('login', ['loggedUser']),
//     createWhitelistFilter('kitchen', ['viewedOrders']),
//   ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

let temporaryStore = null;
temporaryStore = createStore(persistedReducer, {});


const store = temporaryStore;

const persistor = persistStore(store);

export { store, persistor };
