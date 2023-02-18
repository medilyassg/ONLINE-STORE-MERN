import { Checkbox, Rating } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react'
import style from './Products.module.css'
export default function Product() {
  return (
    <div className={style.product}>
        <div className={style.imagezone}>
            <img src={require('../Images/home.jpg')} alt="" />
        </div>
        <div className={style.productInfo}>
            <div className={style.productName}>
                <p>product name </p>
                <div>
                <Checkbox className={style.icon} color="error"icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox
                color="error"
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                />
                </div>
            </div>
            <p className={style.category}>category</p>
            <Rating name="read-only" className={style.icon} value="2" readOnly />
            <p className={style.price}>40Dh</p>
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat dignissimos 
                libero nihil repudiandae architecto aliquid tempore ipsa nemo accusantium!</p>
        </div>
    </div>
  )
}

