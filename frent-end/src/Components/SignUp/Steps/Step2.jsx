
import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../SignUp.module.css'

export default function Step2() {
    const navigate=useNavigate()
  return (
    <React.Fragment>
        <div>
                        <div className={style.formHeader}>
                            <h1>Create your account</h1>
                            <p>What would you like to name your store?</p>
                        </div>
                        <div className={style.formItem}>
                            <label htmlFor="">Store name</label>
                            <input type="text" />
                        </div>
                        <div className={style.lastItem}>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">I'm not a seller</label>
                        </div>
                        
                        <div className={style.fromButton}>
                            <button onClick={()=>{navigate('/SignUp/step3')
                         const step2=document.getElementById('step2')
                         step2.style.backgroundColor='rgb(148, 55, 230)'
                         const StepNumber=document.getElementById('StepNumber')
                        const StepNumberValue=Number(document.getElementById('StepNumber').innerHTML)

                    StepNumber.innerHTML=StepNumberValue+1
                         }}>Continue</button>
                            <button className={style.back} onClick={(e)=>{e.preventDefault() 
                                navigate(-1)
                                const StepNumber=document.getElementById('StepNumber')
                                const StepNumberValue=Number(document.getElementById('StepNumber').innerHTML)

                                StepNumber.innerHTML=StepNumberValue-1
                               
                                }}>Back</button>
                        </div>
        </div>
                       
                    
    </React.Fragment>
  
)}
