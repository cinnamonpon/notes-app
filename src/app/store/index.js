import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore } from 'redux';
import appReducer from '@reducers';
import middleware from './middleware';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'user',
  ],
};
const presistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(presistedReducer, middleware);

const persistor = persistStore(store);

export { store, persistor };
