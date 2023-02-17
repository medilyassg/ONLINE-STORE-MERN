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
        <div>
            <img src={require('../Images/home.jpg')} alt="" />
        </div>
        <div>
            <div>
                <p>product name </p>
                <div>
                <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox
                
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                />
                </div>
            </div>
            <p>category</p>
            <Rating name="read-only" value="2" readOnly />
            <p>40Dh</p>
            <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Numquam exercitationem dolorum illum.</li>
                <li>Quae voluptatem fugiat vel.</li>
            </ul>
        </div>
    </div>
  )
}

