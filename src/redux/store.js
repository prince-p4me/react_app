import { createStore, combineReducers } from 'redux';
import {
  getRoute
} from './reducer';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorage } from 'AsyncStorage';

// creating reducers
const rootReducer = combineReducers({
  getRoute
});

//creating, applying sagas


//creating store persist
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['getRoute'],
  blacklist: [],
  throttle: 1000,
  debounce: 1000,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//creating store
let store = createStore(persistedReducer);

//creating persistor
let persistor = persistStore(store);

//running saga middleware

export { store, persistor };
