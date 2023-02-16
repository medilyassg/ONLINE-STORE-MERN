import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../SignUp.module.css'

export default function Step3() {
    const navigate=useNavigate()
  return (
    <React.Fragment >
        <h1 className={style.title}>One last step</h1>
                <div >
                   
                    <div className={style.formItem}>
                        <label htmlFor="">Phone number</label>
                        <input type="email" placeholder='Type your Phone number'/>
                    </div>
                    <div className={style.formItem}>
                        <label htmlFor="">Address line</label>
                        <input type="email" placeholder='Type your Address '/>
                    </div>
                    <div className={style.formItem}>
                        <label htmlFor="">Country</label>
                        <select name="Country" id="">
                            <option value="mar">Maroc</option>
                        </select>
                    </div>
                    
                    <div className={style.fromButton}>
                        <button onClick={(e)=>{e.preventDefault()
                        const step3=document.getElementById('step3')
                        step3.style.backgroundColor='rgb(148, 55, 230)'
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
  )
}
