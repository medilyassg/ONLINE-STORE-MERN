import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Products from '../../Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../Redux/UserSlice';
import { addCommand } from '../../../Redux/commandSlice';
import { useState } from 'react';








const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function UserDashbord() {
  
  const cartContainerStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    width: '70%',
    margin: '0 auto',
  };

  const cartTitleStyle = {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const cartItemsStyle = {
    marginBottom: '20px',
  };

  const cartItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  };

  const cartItemNameStyle = {
    fontWeight: 'bold',
  };

  const cartItemPriceStyle = {
    color: '#555',
  };

  const cartTotalStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const cartButtonStyle = {
    backgroundColor: '#00a65a',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  
  const user = useSelector((state) => state.users.user);

  const cartItems = useSelector((state) => state.products.cart);
  
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false);

  const handleCheckout = () => {
    // // if (!user) {
    // //   // User is not connected, handle the logic accordingly (e.g., show login modal, redirect to login page)
    // //   navigate('/signin')
    // //   return;
    // }
    // Create the command object with the required properties
    const command = {
      user_id: 123456789, // Set the user ID based on your application's logic
      products: cartItems.map((item) => item._id),
      totalAmount: totalPrice,
      payment_methode: 'cash on delivery',
    };

    // Dispatch the addCommand action to send the command to the server
    dispatch(addCommand(command));
    toggleDrawer('right', false)
    setShowAlert(true);

    // Hide the alert after 3 seconds
  };
    // Optional: Reset the cart items or perform any other actions
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/signin'); // Redirect to the sign-in page

  };
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const list = (anchor) => (
        <Box
          sx={{ width: 800 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            
         
          
        </Box>
      );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>log out</MenuItem>
    </Menu>
  );
  
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

    
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 ,backgroundColor:"white" }} >
      <AppBar position="fixed" sx={{ backgroundColor:"blueviolet" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" color="inherit" aria-label="add to shopping cart" onClick={toggleDrawer('right', true)}>
          <ShoppingCartIcon />

            </IconButton> 

            
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    <React.Fragment key='right'>
        <SwipeableDrawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
            
          >
           <div style={cartContainerStyle}>
      <h2 style={cartTitleStyle}>Cart</h2>
      <div style={cartItemsStyle}>
        {cartItems.map((item) => (
          <div key={item.id} style={cartItemStyle}>
            <p style={cartItemNameStyle}>{item.name}</p>
            <p style={cartItemPriceStyle}>${item.price}</p>
          </div>
        ))}
      </div>
      <p style={cartTotalStyle}>Total Price: ${totalPrice}</p>
      <button style={cartButtonStyle} onClick={handleCheckout}>
        Checkout
      </button>
      
    </div>
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
        <div style={{ marginTop:"12vh" }}>
          <Products />
        </div>
    </>
  );
}
