import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import style from '../SignUp.module.css'
export default function Step1() {
    const navigate=useNavigate()
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
    <React.Fragment>
        <h1 className={style.title}>Create your account</h1>
                <div >
                    <div className={style.FirstItem}>
                        <div>
                            <label htmlFor="">First name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Last name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={style.formItem}>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>
                    <div className={style.formItem}>
                        <label htmlFor="">Password</label>
                        <div className={style.password}>
                            <input type={ActiveEyes? "text" : "password"} />
                            {eyes()}
                                
                            
                            
                        </div>
                        
                    </div>
                    <div className={style.lastItem}>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">I agree to IlyCom terms and conditions of use</label>
                    </div>
                    <div className={style.fromButton}>
                        <button onClick={()=>{
                            navigate('/SignUp/step2')
                    const step1=document.getElementById('step1')
                    const StepNumber=document.getElementById('StepNumber')
                    const StepNumberValue=Number(document.getElementById('StepNumber').innerHTML)

                    StepNumber.innerHTML=StepNumberValue+1
                    step1.style.backgroundColor='rgb(148, 55, 230)'
                    }}>Continue</button>
                    </div>
                    <hr />
                    <p>Already have an account? <Link to='/SignIn'>Log in</Link></p>
                </div>
    </React.Fragment>
  )
}
