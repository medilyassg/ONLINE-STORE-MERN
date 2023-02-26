import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AdminDashbord/AddProduct/AddProduct';
import Customers from './Components/AdminDashbord/Customers/Customers';
import Dashboard from './Components/AdminDashbord/Dashbord';
import DashbordIndex from './Components/AdminDashbord/DashbordIndex';
import Orders from './Components/AdminDashbord/Orders/Orders';
import Productslist from './Components/AdminDashbord/Products/Productslists';
import Conatct from './Components/Contact/Conatct';
import Features from './Components/Features/Features';
import ForgotPassword from './Components/ForgotPassword/Forgotpassword';
import HomePage from './Components/HomePage/HomePage';
import HomePageIndex from './Components/HomePage/HomePageIndex';
import Products from './Components/Products/Products';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Step1 from './Components/SignUp/Steps/Step1';
import Step2 from './Components/SignUp/Steps/Step2';
import Step3 from './Components/SignUp/Steps/Step3';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} >
          <Route index element={<HomePageIndex />} />
          <Route path='features' element={<Features />} />
          <Route path='Products' element={<Products />} />
          <Route path='contact' element={<Conatct />} />  
        </Route>
        <Route path='SignUp' element={<SignUp />} >
          <Route index element={<Step1 />} />
          <Route path='step2' element={<Step2 />} />
          <Route path='step3' element={<Step3 />} />
        </Route>
        <Route path='SignIn' element={<SignIn />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path="dashbord" element={<Dashboard />} >
          <Route index element={<DashbordIndex />} />
          <Route path='Products' element={<Productslist />} />
          <Route path='Orders' element={<Orders />} />
          <Route path='Customers' element={<Customers />} />
          <Route path='AddProduct' element={<AddProduct />} />
        </Route>
        
      </Routes>
      
      
    </React.Fragment>
  );
}

export default App;
