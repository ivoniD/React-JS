import React, {useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const Products = () => {
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'products/LOAD_PRODUCTS',
      //the action was dispatched from the component
    }) ;
  }, [dispatch])

  if(products.length){
    localStorage.setItem('APP_PRODUCTS', JSON.stringify(products))
  }

  const addFavorite = (id) => {
    // console.log('Adding product to favorite', id);
    dispatch({
      type: 'favorites/ADD_FAVORITE',
      payload: id
    })
  };
  const addToCart = (id) => {
    console.log('Adding product to cart', id);
  };
if(products.length === 0){
  return(
    <div className='alert alert-dismissable alert-info'>
      <strong>Atert!</strong>Please start adding products
      <Link to='/new'> from here </Link>
    </div>
  )
}

  return (
    <div>
      <ul className="list-group">
        {products.map((prod) => (
          <ProductItem
            key={prod.id}
            item={prod}
            onFavorite={addFavorite}
            onCartAdd={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
