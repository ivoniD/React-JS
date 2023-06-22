import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';

const ProductItem = ({ item, onFavorite, onCartAdd }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.text}
      <div>
        <button
          onClick={() => onFavorite(item.id)}
          className="btn btn-secondary"
        >
          {item.isFavourite 
            ? (<AiFillHeart size={24}/>)
            : (<AiOutlineHeart size={24}/>)
          }
        </button>
        <button
          onClick={() => onCartAdd(item.id)}
          className="btn btn-secondary"
        >
          <IoIosAdd size={24} />
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
