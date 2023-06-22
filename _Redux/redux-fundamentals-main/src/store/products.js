import { v4 as uuidv4} from 'uuid'


const INITIAL_STATE = {
  products: []
}

const PRODUCTS = [
  {
    id: uuidv4(),
    text: 'iPhone',
    isFavourite: true,
    category: 'Mobile',
    price: 1900
  },
  {
    id: uuidv4(),
    text: 'MacBook',
    isFavourite: false,
    category: 'Laptop',
    price: 3000
  },
  {
    id: uuidv4(),
    text: 'Peter England',
    isFavourite: false,
    category: 'Clothing',
    price: 200
  },
];


function productsReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'products/LOAD_PRODUCTS':
      return{
        ...state,
        products: state.products.length === 0 ? [...PRODUCTS] : state.products
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
    default: 
        return state
  }
}


export default productsReducer;

