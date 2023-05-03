import { legacy_createStore as createStore} from "redux";

const initialState = { count: 0, }

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { 
        ...state, 
        count: state.count + 1
      }
    case 'DECREMENT':
      return { 
        ...state, 
        count: state.count - 1
      }
    case 'RESET':
      return { 
        ...initialState
      }
    case 'INCREMENT_BY_COUNT':
      return {
        ...state,
        count: state.count + action.payload
      }
    default: return state;
  }
}

const store = createStore(rootReducer)
export default store;