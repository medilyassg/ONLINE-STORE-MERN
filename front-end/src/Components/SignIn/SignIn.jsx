import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import style from './Signin.module.css';
import { useSelector } from "react-redux";
import { loginUser } from "../../Redux/UserSlice";


export default function SignIn() {
    const user = useSelector((state) => state.users.user);
    const error = useSelector((state) => state.users.error);
  const [ActiveEyes, setActiveEyes] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = () => {
    dispatch(loginUser({ email, password }));
    if(error) alert('email or password not correct')
    if(user !==null){
        console.log(user._id)
        if (user.role == "seller") {
            navigate("/dashbord");
          } else {
            navigate("/user");
          }
    }
    
    };
  

  const eyes = () => {
    if (ActiveEyes) {
      return (
        <FaEye
          className={style.icon}
          onClick={() => {
            setActiveEyes(false);
          }}
        />
      );
    } else {
      return (
        <FaEyeSlash
          className={style.icon}
          onClick={() => {
            setActiveEyes(true);
          }}
        />
      );
    }
  };

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
            <form  className={style.form}>
              <div className={style.formItem}>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className={style.formItem}>
                <label htmlFor="">Password</label>
                <div className={style.password}>
                  <input type={ActiveEyes ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                  {eyes()}
                </div>
              </div>
              <div className={style.lastZone}>
                <Link to="/ForgotPassword">Forgot password ?</Link>
                <button type="button" onClick={handleSubmit}>Login</button>
                <p>
                  Don’t have an account ? <Link to="/SignUp">Create an account</Link>
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
