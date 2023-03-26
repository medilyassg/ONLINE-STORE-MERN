import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userreducer from './UserSlice';
import productreducer from './ProductsSlice'
import commandereducer from './commandSlice'
import costumerreducer from './costumerSlice'
const reducer= combineReducers({
    'user': userreducer,
    'product':productreducer,
    'commande':commandereducer,
    'costumer':costumerreducer

});
const store=configureStore({reducer})
export default store