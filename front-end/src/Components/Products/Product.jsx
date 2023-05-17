import { Button, Checkbox, Rating } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@mui/material/IconButton';

import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import style from './Products.module.css'
import { addToCart } from '../../Redux/ProductsSlice';
import { useDispatch } from 'react-redux';
export default function Product(props) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#00a65a',
    border: '1px solid #00a65a',
    '&:hover': {
      backgroundColor: '#008c4f',
    },
  };
  return (
    <div className={style.product}>
        <div className={style.imagezone}>
            <img src={require('../Images/home.jpg')} alt="" />
        </div>
        <div className={style.productInfo}>
            <div className={style.productName}>
                <p>{props.product.name} </p>
                <div className={style.buttons}>
                <Button variant="contained" onClick={()=>handleAddToCart(props.product)} startIcon={<AddShoppingCartIcon />} style={buttonStyle}>
      Add to Cart
    </Button>
    <Button
      variant="outlined"
      style={{
        color: '#00a65a',     // Green color
        border: '1px solid #00a65a',   // Green border
        background: '#fff',   // White background
      }}
      sx={{
        '&:hover': {
          background: '#00a65a',   // Green background on hover
          color: '#fff',           // White text on hover
        },
      }}
    >
      More Details
    </Button>
                </div>
            </div>
            <p className={style.category}>{props.product.category}</p>
            <Rating name="read-only" className={style.icon} value="2" readOnly />
            <p className={style.price}>{props.product.price} $</p>
            <p className={style.description}>{props.product.description}</p>
        </div>
    </div>
  )
}

