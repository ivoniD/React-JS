import { v4 as uuidv4} from 'uuid'


const INITIAL_STATE = {
  products: []
}




function productsReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'products/LOAD_PRODUCTS':
      return{
        ...state,
        products: state.products.length === 0 ? [] : state.products
      };
    case 'product/ADD_PRODUCT':
      const { title, price, category} = action.payload;
      const newProduct = {
        text: title,
        price,
        category,
        id: uuidv4(),
        isFavourite: false,
      };
      return{
        ...state,
        products: [...state.products, newProduct]
      };
    case 'favorites/ADD_FAVORITE':
      return{
        ...state,
        products: state.products.map(x => {
          return x.id === action.payload
            ? { 
              ...x,
              isFavourite: !x.isFavourite,
            }
            : x;
        })
      }
    default: 
        return state
  }
}


export default productsReducer;

