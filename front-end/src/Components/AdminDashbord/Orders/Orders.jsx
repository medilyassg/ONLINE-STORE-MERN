import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FormDialog from './UpdateOrder';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Button, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteCommand, fetchCommands } from '../../../Redux/commandSlice'; 
import { useState } from 'react';




export default function Orders() {
  const dispatch = useDispatch();
  const commands = useSelector((state) => state.commandes.commands);
  const [selectedCommand, setSelectedCommand] = useState(null);
  const [openConfirmation, setOpenConfirmation] = useState(false);

useEffect(() => {
  dispatch(fetchCommands());
}, [dispatch]);
const deleteCommande = (command) => {
  dispatch(deleteCommand(command._id));
  dispatch(fetchCommands());

}
  const [value, setValue] = React.useState('one');
  const [commandtoedit, setcommandtoedit] = useState('');
  const handleClickOpen = (command) => {
    setOpen(true);
    setcommandtoedit(command)
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

 
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column',gap:"10px" }}>
      <Title>Orders List </Title>

      <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="All Orders" />
        <Tab value="for" label="New" />
        <Tab value="two" label="Completed" />
        <Tab value="three" label="Conceled" />
      </Tabs>
    </Box>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>order Date</TableCell>
            <TableCell >Delivery Date</TableCell>
            <TableCell >Delivery Status</TableCell>
            <TableCell >actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {commands.filter(item=>item.to_user!=='642180b2d0a9659feba6c8ea').map((command) => (
  <TableRow key={command._id}>
    <TableCell>{command._id}</TableCell>
    <TableCell>{command.totalAmount}</TableCell>
    <TableCell>{command.payment_methode}</TableCell>
    <TableCell>{command.createdAt}</TableCell>
    <TableCell align="right">{command.delivery_date}</TableCell>
    <TableCell align="right">{command.status}</TableCell>
    <TableCell>
    <IconButton variant="soft" color='error' onClick={() => {
  setSelectedCommand(command);
  setOpenConfirmation(true);
}}>
  <DeleteOutlineIcon />
</IconButton>
      <IconButton variant="soft" color='success' onClick={()=>handleClickOpen(command)}>
        <ModeEditIcon />
      </IconButton>
    </TableCell>
  </TableRow>
))}

        </TableBody>
      </Table>
            <FormDialog open={open} close={handleClose} command={commandtoedit}/>
      </Paper>
      <Dialog
  open={openConfirmation}
  onClose={() => setOpenConfirmation(false)}
>
  <DialogTitle>Confirm deletion</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Are you sure you want to delete this command?
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenConfirmation(false)}>Cancel</Button>
    <Button
      onClick={() => {
        deleteCommande(selectedCommand);
        setOpenConfirmation(false);
      }}
      color="error"
    >
      Delete
    </Button>
  </DialogActions>
</Dialog>


    </React.Fragment>
  );
}