import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../Redux/ProductsSlice'; 


import { InputLabel, MenuItem, Select } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Edit(props) {
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: '',
    category: '',
    description: '',
    price: '',
    imageUrl: '',
    inventory: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(formData));
  };

 
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const dispatch = useDispatch();


  return (
    <div>

        <Box sx={{
        width:"100%",
        maxWidth:"90%", 
        margin:'auto',
        marginTop:"40px",
        backgroundColor:"rgb(250,251,252)",
        padding:"20px",
        borderRadius:"20px",
        boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }}>
        <Toolbar>
            
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              New Product
            </Typography>
            <Button autoFocus color="primary" onClick={handleSubmit} variant="contained">
  Save
</Button>
          </Toolbar>
        <Box
      sx={{
        width:"100%",
        maxWidth:"90%", 
        margin:'auto',
        marginTop:"20px",

      }}
    >
     <InputLabel id="demo-simple-select-label">Product Name</InputLabel>
<TextField
  fullWidth
  id="fullWidth"
  value={formData.name}
  onChange={(event) =>
    setFormData({ ...formData, name: event.target.value })
  }
/>
<InputLabel id="demo-simple-select-label">Category</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={formData.category}
  onChange={(event) =>
    setFormData({ ...formData, category: event.target.value })
  }
  fullWidth
>
  <MenuItem value="category1">Category 1</MenuItem>
  <MenuItem value="category2">Category 2</MenuItem>
  <MenuItem value="category3">Category 3</MenuItem>
</Select>
<InputLabel id="demo-simple-select-label">Description</InputLabel>
<TextField
  id="outlined-multiline-flexible"
  multiline
  maxRows={4}
  fullWidth
  value={formData.description}
  onChange={(event) =>
    setFormData({ ...formData, description: event.target.value })
  }
/>
<InputLabel id="demo-simple-select-label">Price</InputLabel>
<TextField
  fullWidth
  id="fullWidth"
  type="number"
  value={formData.price}
  onChange={(event) =>
    setFormData({ ...formData, price: event.target.value })
  }
/>
<InputLabel id="demo-simple-select-label">Image</InputLabel>
<input
  accept="image/*"
  id="icon-button-file"
  type="file"
  style={{ display: 'none' }}
  onChange={(event) =>
    setFormData({ ...formData, imageUrl: event.target.files[0] })
  }
/>
<label htmlFor="icon-button-file">
  <IconButton
    color="primary"
    aria-label="upload picture"
    component="span"
  >
    <PhotoCamera />
  </IconButton>
</label>
<InputLabel id="demo-simple-select-label">Inventory</InputLabel>
<TextField
  fullWidth
  id="fullWidth"
  type="number"
  value={formData.inventory}
  onChange={(event) =>
    setFormData({ ...formData, inventory: event.target.value })
  }
/>

    </Box>
        </Box>
          
    </div>
  );
}