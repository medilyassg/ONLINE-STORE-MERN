import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from './Products.module.css'

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
    </div>
  )
}
