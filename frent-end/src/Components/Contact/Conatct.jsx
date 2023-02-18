import { Button, TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import style from './contact.module.css'
export default function Conatct() {
  return (
    <React.Fragment >
        <div style={{ backgroundColor:"#f9f9f9",paddingBottom:"20vh" }}>
        <div className={style.container}>
            <h1>Contact us</h1>
            <p>The support team is available 24/24 to assist you and answer any questions you may have in order to achieve greater success.</p>
        </div>
        <div className={style.formzone}>
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          fullWidth 
          color="secondary"
        />
        
        <TextField
          id="outlined-multiline-static"
          label="How can we help?"
          multiline
          fullWidth
          rows={4}
          color="secondary"
          
        />
        <Button variant="contained" endIcon={<SendIcon   />} fullWidth    color="secondary" >
  Send
</Button>
        </div>
        </div>
        
    </React.Fragment>
    
  )
}
