const INIT_STATE = [];

function favoritesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'favorites/ADD_FAVORITE':
      const itemID = state.includes(action.payload);
      // console.log(`id ${itemID}`);
      if (!itemID) {
        // console.log(`payload ${action.payload}`);
        return [...state, action.payload];
      }
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}

export default favoritesReducer;