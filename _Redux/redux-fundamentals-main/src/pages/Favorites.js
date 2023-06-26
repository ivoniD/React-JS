import React from 'react';
import FavoriteItem from '../components/FavoriteItem';
import { useSelector } from 'react-redux'

const Favorites = () => {
  const favoriteIds = useSelector(state => state.favorites)
  const favoriteItems = useSelector( state => {
    return favoriteIds.map(id => state.products.products.find(item => item.id === id))
  })
  return (
    <ul className="list-group">
   {favoriteItems.map(item => (
    <FavoriteItem key={item.id} item={item} />
   ))}
    </ul>
  );
};

export default Favorites;
