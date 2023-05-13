import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Outlet } from 'react-router-dom';
import style from './SignUp.module.css'
import Step1 from './Steps/Step1';
export default function SignUp() {
    
  return (
    <React.Fragment>
        <header className={style.header}>
            <div>
                <h2>IlyCom</h2>
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
