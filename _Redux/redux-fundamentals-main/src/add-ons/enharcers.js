export const addloggingOnDispatch = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)
    function newDispatch(action) {
      const result = store.dispatch(action);
      console.log('Logging>>>>>>>>>>>>>')
      return result;
    }
    return {
      ...store,
      dispatch: newDispatch
    }
  }
}