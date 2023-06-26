import React, {useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios'

const selectProductIds = state => state.products.products.map(prod => prod.id);

const Products = () => {
  const productIds = useSelector(selectProductIds, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    if(productIds.length === 0){
      axios.get('https://fakestoreapi.com/products').then(
        res => {
          dispatch({
            type: 'products/LOAD_PRODUCTS',
            payload: res.data,
          })
        }
      )
    }
  }, [dispatch, productIds])


if(productIds.length === 0){
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
        {productIds.map((prodId) => (
          <ProductItem
            key={prodId}
            productId={prodId}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
