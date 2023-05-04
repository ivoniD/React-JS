import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux'
import productsReducer from './products'

const rootReducer = combineReducers({
  products: productsReducer
})
//create store
const store = createStore(rootReducer)
export default store