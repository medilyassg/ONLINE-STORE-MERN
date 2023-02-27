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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Edit(props) {
  const [open, setOpen] = React.useState(false);

  

  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div>

      <Dialog
        sx={{ width:"400" }}
        fullWidth
        open={props.open}
        onClose={props.close}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.close}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit Product
            </Typography>
            <Button autoFocus color="inherit" onClick={props.close}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box
      sx={{
        width:"100%",
        maxWidth:"90%", 
        margin:'auto',
        marginTop:"20px",

      }}
    >
      <InputLabel id="demo-simple-select-label">Product Name</InputLabel>
      <TextField fullWidth  id="fullWidth" />
      <InputLabel id="demo-simple-select-label">Categoory</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    onChange={handleChange}
    fullWidth
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  <InputLabel id="demo-simple-select-label">Description</InputLabel>

  <TextField
          id="outlined-multiline-flexible"
          multiline
          maxRows={4}
          fullWidth
        />
      <InputLabel id="demo-simple-select-label"  >Price</InputLabel>

    <TextField fullWidth  id="fullWidth" type='number' />
    <InputLabel id="demo-simple-select-label">image</InputLabel>

    <IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
    </Box>
      </Dialog>
    </div>
  );
}