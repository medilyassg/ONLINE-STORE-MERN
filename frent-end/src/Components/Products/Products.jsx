import React from 'react'
import style from './Products.module.css'
// import {VscListFilter} from 'react-icons/vsc'
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormControlLabel, FormGroup, InputLabel } from '@mui/material';
import { MdTune } from 'react-icons/md';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Product from './Product';


export default function Products() {
  return (
    <React.Fragment     >
        <div className={style.parent}>
        <div className={style.content}>
                <div className={style.filterZone}>
                    <div>
                        <p>Filter</p>
                        <button><MdTune className={style.filtericon}/></button>
                    </div>
                    <div>
                        <p>Shipping</p>
                        <FormGroup className={style.formgroupe}>
                            <FormControlLabel className={style.formlabel} control={<Checkbox color='secondary' size='small'/>} label="Free Shipping" />
                        </FormGroup> 
                    </div>
                    <div>
                        <p>Category</p>
                        <FormGroup className={style.formgroupe}>
                            <FormControlLabel control={<Checkbox color='secondary'size='small' />} label="Free Shipping" />
                        </FormGroup> 
                        <FormGroup className={style.formgroupe}>
                            <FormControlLabel control={<Checkbox color='secondary' size='small'/>} label="Free Shipping" />
                        </FormGroup> 
                        <FormGroup className={style.formgroupe}>
                            <FormControlLabel control={<Checkbox color='secondary' size='small' />} label="Free Shipping" />
                        </FormGroup> 
                    </div>
                    <div>
                        <p>Price</p>
                        <FormGroup className={style.formgroupe}>
                            <FormControlLabel control={<Checkbox color='secondary'size='small' />} label="< 100DH" />
                        
                            <FormControlLabel control={<Checkbox color='secondary'size='small' />} label="100DH-199Dh" />
                        
                            <FormControlLabel control={<Checkbox color='secondary' size='small'/>} label="200DH-599DH" />
                        
                            <FormControlLabel control={<Checkbox color='secondary'size='small' />} label="> 600DH" />
                        </FormGroup> 
                    </div>
                </div>
                <div className={style.list}>
                    <div className={style.sort}>
                        <p>categorie name</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small" color='secondary'>Sort By</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                            color='secondary'
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Best matches</MenuItem>
                            <MenuItem value={20}>Orders</MenuItem>
                            <MenuItem value={30}>Price</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                    <Product />
                </div>
               
               
            </div>
        </div>
            

    </React.Fragment>
  )
}
