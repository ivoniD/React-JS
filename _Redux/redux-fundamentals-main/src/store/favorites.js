const INIT_STATE = [];

function favouritesReducer(state = INIT_STATE, action){
  switch(action.type){
    case 'favorites/ADD_FAVORITE':
      const itemID = state.includes(action.payload);
      if(!itemID){
        return [...state, action.payload]
      }
      return state.filter(item => item !== action.payload)
    default:
        return state;
  }
}