import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Features from './Features/Features';
import ForgotPassword from './ForgotPassword/Forgotpassword';
import HomePage from './HomePage/HomePage';
import HomePageIndex from './HomePage/HomePageIndex';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Step1 from './SignUp/Steps/Step1';
import Step2 from './SignUp/Steps/Step2';
import Step3 from './SignUp/Steps/Step3';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} >
          <Route index element={<HomePageIndex />} />
          <Route path='features' element={<Features />} />
        </Route>
        <Route path='SignUp' element={<SignUp />} >
          <Route index element={<Step1 />} />
          <Route path='step2' element={<Step2 />} />
          <Route path='step3' element={<Step3 />} />
        </Route>
        <Route path='SignIn' element={<SignIn />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
      </Routes>
      
      {/*  */}
      {/* <SignIn /> */}
      {/* <ForgotPassword /> */}
    </React.Fragment>
  );
}

export default App;
