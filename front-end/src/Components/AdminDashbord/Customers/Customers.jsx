import React, { useEffect } from 'react'
import style from './Customers.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCustomers } from '../../../Redux/costumerSlice';

export default function Customers() {
const dispatch = useDispatch();
const customers = useSelector(state => state.customers.customers);
useEffect(() => {
  dispatch(getAllCustomers());
}, [dispatch]);
return (
  <div className={style.customers}>
    <h3>Customers ({customers.length})</h3>
    <div className={style.list}>
      {customers.map(customer => (
        <div className={style.customer} key={customer.id}> 
          <div className={style.customerimg}>
            <img src='https://unsplash.com/fr/photos/rDEOVtE7vOs' alt="" />
          </div>
          <div className={style.customerinfo}>
            <h3>{customer.name}</h3>
            <p>Email : <a href={`mailto: ${customer.email}`}>{customer.email}</a></p>
            <p>Phone : <a href={`tel: ${customer.phone}`}>{customer.phone}</a></p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

}
