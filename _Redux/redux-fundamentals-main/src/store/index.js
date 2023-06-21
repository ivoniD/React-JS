import { legacy_createStore as createStore, compose, applyMiddleware} from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import productsReducer from './products'
import { addloggingOnDispatch } from '../add-ons/enharcers'
import { loggerMiddleware, blockActionMiddleware } from '../add-ons/middleware'

const rootReducer = combineReducers({
  products: productsReducer
})
const composeEnhancer = compose(addloggingOnDispatch)
const middlewareEnhancer = applyMiddleware(
  loggerMiddleware,
  blockActionMiddleware
  )
//create store
const store = createStore(
  rootReducer, 
  composeWithDevTools(composeEnhancer, middlewareEnhancer)
  );
export default store 