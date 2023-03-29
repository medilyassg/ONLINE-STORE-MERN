import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Outlet } from 'react-router-dom';
import style from './SignUp.module.css'
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
export default function SignUp() {
    
  return (
    <React.Fragment>
        <header className={style.header}>
            <div>
                <h2>IlyCom</h2>
            </div>
            <div className={style.steps}>
                <div className={style.step} id='step1'></div>
                <div className={style.step} id='step2'></div>
                <div className={style.step} id='step3'></div>
                
            </div>
            <div className={style.StepsZone}>
                <span>Step</span>  
                <span id='StepNumber'> 1</span> / 3 
            </div>
        </header>
        <div className={style.formZone}>
            <form action="" className={style.form}>
                <Outlet />
            {/* <Step1 /> */}
            {/* <Step2/> */}
            {/* <Step3 /> */}
            </form>
        </div>
        <footer className={style.footer}>
            <p>© 2023 IlyCom, Inc. All Rights Reserved.</p>
            <ul>
                <li>العربية</li>
                <li>English</li>
                <li>Français</li>
            </ul>
        </footer>
    </React.Fragment>
  )
}
