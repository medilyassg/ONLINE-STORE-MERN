import React from 'react'
import style from './Products.module.css'
// import {VscListFilter} from 'react-icons/vsc'
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormControlLabel, FormGroup, InputLabel } from '@mui/material';
import { MdTune } from 'react-icons/md';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Product from './Product';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function Products() {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
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
                            label="Sort By"
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
                    <div className={style.products}>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <MobileStepper
      variant="dots"
      steps={6}
      color ="secondary"
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 1000, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} color ="secondary" disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} color ="secondary" disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
                    </div>
                    
                </div>
               
               
            </div>
        </div>
            

    </React.Fragment>
  )
}
