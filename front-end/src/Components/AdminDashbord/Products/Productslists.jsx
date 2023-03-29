import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Edit from '../EditProduc/Edit';
import { deleteProduct } from '../../../Redux/ProductsSlice';

import style from './Products.module.css';
import { fetchProducts } from '../../../Redux/ProductsSlice';

export default function Productslist() {
  const dispatch = useDispatch();
  const [age, setAge] = React.useState('');
  const user = useSelector((state) => state.users.user);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
const [producttoedit, setproducttoedit] = useState('');
  const handleClickOpen = (product) => {
    setOpen(true);
    setproducttoedit(product)
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
const deleteproduct=(id)=>{
  if(window.confirm('are you sure')){
    dispatch(deleteProduct(id));

  }

}
  const products = useSelector((state) => state.products.products);

  return (
    <div className={style.products}>
      {/* ... */}
      <div className={style.list}>
        <div className={style.header}>
          <p className={style.name}>Product Name </p>
          <p className={style.category}>Category</p>
          <p className={style.price}>Price</p>
          <p className={style.inventory}>Inventory</p>
          <p className={style.date}>Date Added</p>
        </div>
        <div className={style.items}>
          {products.filter(item=>item.user_id=='642180b2d0a9659feba6c8ea').map((product) => (
            <div className={style.item} key={product.id}>
              <p className={style.name}>{product.name}</p>
              <p className={style.category}>{product.category}</p>
              <p className={style.price}>{product.price}</p>
              <p className={style.inventory}>{product.inventory}</p>
              <p className={style.date}>{product.date}</p>
              <div>
                <IconButton variant="soft" color='error'onClick={()=>deleteproduct(product._id)}>
                  <DeleteOutlineIcon  />
                </IconButton>
                <IconButton variant="soft" color='success' onClick={()=>handleClickOpen(product)}>
                  <ModeEditIcon  />
                </IconButton>
            </div>
            
          </div>
          ))}
        </div>
      </div>
      <Edit open={open} close={handleClose} product={producttoedit} />
    </div>
  )
}
