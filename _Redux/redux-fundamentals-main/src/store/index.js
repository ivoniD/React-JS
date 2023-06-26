import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import favoritesReducer from './favorites';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products']
}

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


//create store
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store)
 