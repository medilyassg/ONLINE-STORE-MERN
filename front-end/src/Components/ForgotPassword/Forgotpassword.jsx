

import React from 'react';
import style from './ForgotPassword.module.css'
const ForgotPassword = () => {
    return (
        <div className={style.container}>
            <div className={style.formZone}>
                <div className={style.logo}>
                    <h2>IlyCom</h2>
                </div>
                <div>
                    <div className={style.formHeader}>
                        <h1>Forgot your password?</h1>
                        <p>Type in your email address to reset your password</p>
                    </div>
                    <div>
                        <form action="" className={style.form}>
                            <div className={style.formItem}>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Email'/>
                            </div>
                            
                            <div className={style.lastZone}>
                                <button>Send</button>
                                
                            </div>
                            

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
