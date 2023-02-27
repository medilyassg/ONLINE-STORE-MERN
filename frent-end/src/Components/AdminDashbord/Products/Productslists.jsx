import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from './Products.module.css'
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
export default function Productslist() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={style.products}>
      <div className={style.head}>
        <h3>Product Inventory</h3>
        <button>New Product</button>
      </div>
      <div className={style.statistics}>
        <div>
          <p>Total Products</p>
          <p>75</p>
        </div>
        <div>
          <p>Out of Stock</p>
          <p>2</p>
        </div>
        <div>
          <p>Total Items</p>
          <p>300</p>
        </div>
        <div>
          <p>Categories</p>
          <p>12</p>
        </div>
      </div>
      <div className={style.filter}>

      <FormControl sx={{  minWidth: 120 }} size="small" >
      <InputLabel id="demo-select-small">Category</InputLabel>

      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Category"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      </FormControl>

      <FormControl sx={{  minWidth: 120 }} size="small" >
      <InputLabel id="demo-select-small">Sort By</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Sort By"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

    </FormControl>

      </div>
      <div className={style.list}>
        <div className={style.header}>
          <p className={style.name}>Product Name </p>
          <p className={style.category}>Category</p>
          <p className={style.price}>Price</p>
          <p className={style.inventory}>Inventory</p>
          <p className={style.date}>Date Added</p>

        </div>
        <div className={style.items}>
          <div className={style.item}>
            <p className={style.name}>product 1</p>
            <p className={style.category}>food</p>
            <p className={style.price}>45 $</p>
            <p className={style.inventory}>45</p>
            <p className={style.date}>2018/01/23</p>
            <div>
            <IconButton variant="soft" color='error'>
              <DeleteOutlineIcon  />
            </IconButton>
            <IconButton variant="soft" color='success'>
              <ModeEditIcon  />
            </IconButton>
            </div>
            
          </div>
          <div className={style.item}>
            <p className={style.name}>product 1</p>
            <p className={style.category}>food</p>
            <p className={style.price}>45 $</p>
            <p className={style.inventory}>45</p>
            <p className={style.date}>2018/01/23</p>
            <div>
            <IconButton variant="soft" color='error'>
              <DeleteOutlineIcon  />
            </IconButton>
            <IconButton variant="soft" color='success'>
              <ModeEditIcon  />
            </IconButton>
            </div>
            
          </div>
          <div className={style.item}>
            <p className={style.name}>product 1</p>
            <p className={style.category}>food</p>
            <p className={style.price}>45 $</p>
            <p className={style.inventory}>45</p>
            <p className={style.date}>2018/01/23</p>
            <div>
            <IconButton variant="soft" color='error'>
              <DeleteOutlineIcon  />
            </IconButton>
            <IconButton variant="soft" color='success'>
              <ModeEditIcon  />
            </IconButton>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
