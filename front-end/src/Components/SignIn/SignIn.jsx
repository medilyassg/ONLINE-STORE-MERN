import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from './Signin.module.css'

export default function SignIn() {
    const [ActiveEyes, setActiveEyes] = useState(false);
    const eyes=()=>{
        if(ActiveEyes){
            return <FaEye  className={style.icon} onClick={()=>{
             setActiveEyes(false)

              
             }}/> 
         }
         else{
              return <FaEyeSlash  className={style.icon} onClick={()=>{
                 setActiveEyes(true)
                  
                 }}/>
         }
    }
  return (
    <div className={style.container}>
        <div className={style.formZone}>
            <div className={style.logo}>
                <h2>IlyCom</h2>
            </div>
            <div>
                <div className={style.formHeader}>
                    <h1>Log in to manage your store</h1>
                    <p>Fill in your YouCan account email and password.</p>
                </div>
                <div>
                    <form action="" className={style.form}>
                        <div className={style.formItem}>
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                        <div className={style.formItem}>
                            <label htmlFor="">Password</label>
                            <div className={style.password}>
                                <input  type={ActiveEyes? "text" : "password"} />
                                {eyes()}
                            </div>
                            
                        </div>
                        <div className={style.lastZone}>
                            <Link to='/ForgotPassword'>Forgot password ?</Link>
                            <button>Login</button>
                            <p>
                            Don’t have an account ? <Link to='/SignUp'>Create an account</Link> 
                            </p>
                        </div>
                        

                    </form>
                </div>
            </div>
        </div>
        
        <div className={style.imgZone}>
            <img src={require("../Images/img4.jpg")} alt="" />
        </div>
    </div>
  );
}
