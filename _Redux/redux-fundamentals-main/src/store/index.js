import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import productsReducer from './products'

const rootReducer = combineReducers({
  products: productsReducer
})

//create store
const store = createStore(
  rootReducer, 
  composeWithDevTools()
  );
export default store 