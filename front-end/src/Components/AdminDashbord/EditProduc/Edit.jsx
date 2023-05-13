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
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../Redux/ProductsSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Edit(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setname] = React.useState('');
  const [category, setcategory] = React.useState('');
  const [description, setdescription] = React.useState('');
  const [price, setprice] = React.useState('');
  const [imageUrl, setimageUrl] = React.useState('');
  const [inventory, setinventory] = React.useState('');
  const dispatch = useDispatch();




  const handleSave = async () => {
    // Call the updateProduct function with the new product data
    await dispatch(updateProduct({
      _id:props.product._id,
      name:name=='' ? props.product.name : name,
      category:category=='' ? props.product.category : category,
      description:description==''? props.product.dexcription : description,
      price:price =='' ? props.product.price : price,
      inventory:inventory =='' ? props.product.inventory : inventory,
      imageUrl:props.product.imageUrl ,
    }));
    props.close()
  };


  return (
    <div>
      <Dialog
        sx={{ width: '400' }}
        fullWidth
        open={props.open}
        onClose={props.close}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.close} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit Product
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: '100%', maxWidth: '90%', margin: 'auto', marginTop: '20px' }}>
        <InputLabel id="demo-simple-select-label">Product Name</InputLabel>
<TextField
  fullWidth
  id="fullWidth"
  value={name}
  onChange={(event) =>
    setname(event.target.value)
  }
/>
<InputLabel id="demo-simple-select-label">Category</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={category}
  onChange={(event) =>
    setcategory(event.target.value)
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
  value={description}
  onChange={(event) =>
    setdescription(event.target.value)
  }
/>
<InputLabel id="demo-simple-select-label">Price</InputLabel>
<TextField
  fullWidth
  id="fullWidth"
  type="number"
  value={price}
  onChange={(event) =>
    setprice(event.target.value)
  }
/>
<InputLabel id="demo-simple-select-label">Image</InputLabel>
<input
  accept="image/*"
  id="icon-button-file"
  type="file"
  style={{ display: 'none' }}
  onChange={(event) =>
   setimageUrl( event.target.files[0] )
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
  value={inventory}
  onChange={(event) =>setinventory(event.target.value)
  }
/>
      </Box>
  </Dialog>
</div>
);
}