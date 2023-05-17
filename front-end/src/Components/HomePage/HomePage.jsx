import React from 'react'
import style from './HomePage.module.css'

import {FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate=useNavigate()
  return (
    <React.Fragment>
        <header className={style.header}>
            <div>
                <h2>shope</h2>
                <Link to='/features'>Features</Link>
                <Link to='/products'>Products</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div>
                <button onClick={()=>navigate('/SignUp')}>Sign Up</button>
                <button onClick={()=>navigate('/SignIn')}>Sign In</button>
                <select name="language" id="language">
                    <option value="eng">English</option>
                    <option value="fr">Francais</option>
                    <option value="ar">العربية</option>
                </select>
            </div>
        </header>
        <Outlet />
        <footer class="footer">
     <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>

          </div>
        </div>
      </div>
     </div>
  </footer>        
    </React.Fragment>
  )
}
