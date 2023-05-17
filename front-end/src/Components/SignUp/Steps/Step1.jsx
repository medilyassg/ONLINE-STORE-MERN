import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import style from '../SignUp.module.css'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../Redux/UserSlice'

export default function Step1() {

    const navigate=useNavigate()
    const dispatch = useDispatch()

    const [ActiveEyes, setActiveEyes] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [storeName, setStoreName] = useState("");
    const [isSeller, setIsSeller] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
  

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
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleRegister = () => {
        // check if user agrees to terms and conditions


        // prepare data for registration
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        };
        if(user.first_name !=""){
            dispatch(registerUser(user));
    
           
                     navigate('/signin')
        }
        // dispatch the register action
        
    };

    return (
        <React.Fragment>

       
            <h1 className={style.title}>Create your account</h1>
            <div>
                <div className={style.FirstItem}>
                    <div>
                        <label htmlFor="">First name</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Last name</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className={style.formItem}>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.formItem}>
                    <label htmlFor="">Password</label>
                    <div className={style.password}>
                        <input type={ActiveEyes? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                        {eyes()}
                    </div>
                </div>

                
                <div className={style.lastItem}>
                    <input type="checkbox" name="" id="" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} />
<label htmlFor="">I agree to the <Link to="/">terms and conditions</Link></label>
</div>
<div className={style.buttonContainer}>
<button className={style.btn} type='button' onClick={handleRegister}>Continue</button>

<p className={style.loginLink} onClick={() => navigate("/login")}>Already have an account? Login</p>
</div>
</div>
</React.Fragment>
);
}