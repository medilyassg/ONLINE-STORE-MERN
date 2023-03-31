import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userreducer from './UserSlice';
import productreducer from './ProductsSlice'
import commandereducer from './commandSlice'
import costumerreducer from './costumerSlice'
const reducer= combineReducers({
    'users': userreducer,
    'products':productreducer,
    'commandes':commandereducer,
    'customers':costumerreducer

});
const store=configureStore({reducer})
export default store