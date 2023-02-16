import React from 'react'
import style from './HomePage.module.css'
import { IoCheckmarkDoneCircle, IoStorefrontOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {MdProductionQuantityLimits} from 'react-icons/md'
import {TfiBarChart} from 'react-icons/tfi'
import {GoPackage} from 'react-icons/go'
import { useNavigate } from 'react-router-dom';
export default function HomePageIndex() {
    const navigate=useNavigate()
  return (
    <React.Fragment>
         <div className={style.content}>
            <div className={style.content_text}>
                <div>
                    <p>Selling online has never been easier</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta quisquam officia magni earum pariatur dolorem, aspernatur obcaecati omnis cumque?</p>  
                </div>
                <div>
                    <ul>
                        <li><IoCheckmarkDoneCircle style={{ color:'rgb(93, 237, 138)' }}/>   Lorem, ipsum dolor.</li>
                        <li><IoCheckmarkDoneCircle style={{ color:'rgb(93, 237, 138)' }}/>   Lorem, ipsum dolor.</li>
                        <li><IoCheckmarkDoneCircle style={{ color:'rgb(93, 237, 138)' }}/>    Ducimus, numquam asperiores!</li>
                        <li><IoCheckmarkDoneCircle style={{ color:'rgb(93, 237, 138)' }}/>    Corrupti, quas facilis!</li>
                    </ul>
                    
                </div>
                <button onClick={()=>navigate('/SignUp')}>Get Started</button>
            </div>
            <div className={style.content_image}>
                <img src={require('../Images/shop-global-1.webp')} alt="" />
                <div>
                    <div>
                        <p>+0</p>
                        <p>Active stores</p>
                    </div>
                    <div>
                        <p>+0</p>    
                        <p>products</p>
                    </div>
                    <div>
                        <p>+0</p>
                        <p>Users</p>
                    </div>
                </div>
            </div>
            
        </div>
        <section className={style.section}>
            <h1>How does it work?</h1>
            <div>
                <div>
                    <AiOutlineShoppingCart  className={style.icon}/>
                    <p>1.Buying and selling products.</p>
                </div>
                <div>
                    <IoStorefrontOutline className={style.icon}/>
                    <p>2.Create your own Store.</p>
                </div>
                <div>
                    <MdProductionQuantityLimits className={style.icon}/>
                    <p>3.Products Liste.</p>
                </div>
                <div>
                    <TfiBarChart className={style.icon} />
                    <p>4.Track your sales.</p>
                </div>
            </div>
        </section>
        <section className={style.section2}>
            <div>
                
                <video src={require('../Images/vid1.mp4')} type="video/mp4" loop autoPlay muted  ></video>
            </div>
            <div>
                
                <GoPackage className={style.icon2}/>
                <h1>All in one</h1>
                <p>Shopify takes care of everything from marketing and 
                    payments to secure transactions and shipping</p>
                <button onClick={()=>navigate('/features')}>Learn More</button>
            </div>
        </section>
        <section className={style.section3}>
            
            <div>
                <div>
                <h1 style={{ fontSize:'100px' }}>🎉</h1>
                <img src={require('../Images/charts.png')} alt="" style={{ width:'300px',height:'100px' }}/>
                </div>
           
                <h1>No charge until you succeed</h1>
                <p>Enjoy all YouCan features and services without any l
                    imitations and without having to pay until you reach $10,000 in sales.</p>
                <button onClick={()=>navigate('/features')}>Learn More</button>
            </div>
            <div>
                
                <img src={require('../Images/img3.jpg')} />
            </div>
        </section>
    </React.Fragment>
  )
}
