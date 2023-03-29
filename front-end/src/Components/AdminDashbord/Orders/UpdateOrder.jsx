import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import style from './order.module.css'
import { updateCommand } from '../../../Redux/commandSlice';
import { useDispatch } from 'react-redux';

export default function FormDialog(props) {
    
  
    
  
    
  
    const [payment, setPayment] = React.useState('');
    const [date, setdate] = React.useState('');
    const [status, setstatus] = React.useState('');
  const dispatch=useDispatch()
  const handleChange = (event) => {
    setPayment(event.target.value);
  };
  const handleSave = async () => {
    // Call the updateProduct function with the new product data
    await dispatch(updateCommand({
      _id:props.command._id,
      payment_methode:payment=='' ? props.command.payment_methode : payment,
      status:status=='' ? props.command.status : status,
      delivery_date:date==''? props.command.dilevry_date : date,
    }));
    console.log(props.command._id)
    props.close()
  };

  return (
    <div>

      <Dialog disableEscapeKeyDown open={props.open} onClose={props.close}>
        <DialogTitle>Update Order</DialogTitle>
        <DialogContent>
          <Box component="form"      className={style.box}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Payment Method</InputLabel>
              <Select
                native
                value={payment}
                onChange={(e)=>setPayment(e.target.value)}
                input={<OutlinedInput label="Payment Method" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
           
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Delivery date"
        value={date}
        onChange={(e) => {
          setdate(e.target.value);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Delivery state</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={status}
                onChange={(e)=>setstatus(e.target.value)}
                input={<OutlinedInput label="Delivery state" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>New</MenuItem>
                <MenuItem value={20}>Completed</MenuItem>
                <MenuItem value={30}>Conceled</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
          <Button onClick={handleSave}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}