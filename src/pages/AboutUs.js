import React, { useState } from "react"
import Mlwany from "../assets/AboutUs/single-image3.jpg"
import Mlwany1 from "../assets/AboutUs/insta-item1.jpg"
import Mlwany2 from "../assets/AboutUs/insta-item2.jpg"
import Mlwany3 from "../assets/AboutUs/insta-item3.jpg"
import Mlwany4 from "../assets/AboutUs/insta-item4.jpg"
import Mlwany5 from "../assets/AboutUs/insta-item5.jpg"
import logo from "../assets/home/main-logo.png"

import '../css/AboutUs.css'
import { Link } from "react-router-dom"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';


const AboutUS =()=>{
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return(
        <>
        <header>
            <div class="container">
                <nav class="nav">
                    <div class="logo">
                        <img className="logo" src={logo}/>
                    </div>
                    <div className={`menu1 ${isMenuOpen ? 'open' : ''}`}>
                        <ul> <i className={`fa-solid fa-xmark ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></i>


                        <li><a><Link className="link" to={"/"}>Home</Link></a></li>
                            <li><a src="#">Services</a></li>
                            <li><a src="#">Products</a></li>
                            <li><a src="#">Watches</a></li>
                            <li><a><Link className="link" to={"/AboutUs"}>About Us</Link></a></li>
                            <li><a>Cart</a></li>
                            <li><a>Check Out</a></li>
                            <li><a>Contact</a></li>
                        </ul>   
                    </div>
                    <div class="menu">
                        <ul>
                            <li><a><Link className="link" to={"/"}>Home</Link></a></li>
                            <li><a src="#">Services</a></li>
                            <li><a src="#">Products</a></li>
                            <li><a src="#">Watches</a></li>
                            <li><a><Link className="link" to={"/AboutUs"}>About Us</Link></a></li>
                            <li><a>Cart</a></li>
                            <li><a>Check Out</a></li>
                            <li><a>Contact</a></li>
                        </ul>   
                    </div>
                    <div className="icon">
                    <i className="fa-solid fa-bars bars" onClick={toggleMenu}></i>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <a><Link className="link" to={"/signin"}><i class="fa-solid fa-user"></i></Link></a>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </nav>
            </div>
        </header>


        <div class="head">
        <div class="header">
            <div class="title">
            <h1>About Us</h1>
            <h6><a>Home</a> &#62; About Us </h6>
            </div>
        </div>
        <div class="section1">
            <div class="sub1">
            <h2> &#9872; QUALITY GUARANTEE</h2>
<h4>Consectetur adipi elit lorem ipsum dolor sit amet.</h4>
            </div>
            <div class="sub2">
            <h2> &#9929; FREE DELIVERY</h2>
<h4>Dolor sit amet orem ipsu mcons ectetur adipi elit.</h4>
            </div>
            <div class="sub3">
            <h2> &#9950; DAILY OFFERS</h2>
<h4>Amet consectetur adipi elit loreme ipsum dolor sit.</h4>
            </div>
            <div class="sub4">
            <h2> &#9960; 100% SECURE PAYMENT</h2>
<h4>Rem Lopsum dolor sit amet, consectetur adipi elit.</h4>
            </div>

        </div>
        <div class="section2">
            <div class="image">
            <img src={Mlwany}/>
            </div>
            <div class="title">
                <h1>HOW WAS MINISTORE FOUND?</h1>
                <h2>ros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing 
                pharetra pellentesque maecenas odio eros at. Quam libero etiam et in ac at quis.
Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam
 senectus congue velit et.</h2>
        <button> Shop Our Store </button>
 </div>
        </div>
        <section class="form">
            <div class="container" >
                <form>
                    <div className="leftForm">
                        <h1>SUBSCRIBE US NOW</h1>
                        <p>Get latest news, updates and deals directly mailed to your inbox.</p>                    </div>
                    <div className="email">
                        <input type="email" placeholder="Your Emaill Adress"/>
                        <button>Subscripe</button>
                    </div>
                </form>
            </div>
        </section>
            <div class="section4">
            <h1>Shop Our Insta</h1>
            <div class="sub1"><a><img src={Mlwany1}/></a></div>
            <div class="sub2"><a><img src={Mlwany2}/></a></div>
            <div class="sub3"><a><img src={Mlwany3}/></a></div>
            <div class="sub4"><a><img src={Mlwany4}/></a></div>
            <div class="sub5"><a><img src={Mlwany5}/></a></div>
            </div>
        </div>
        </>
        
    );
}
export default AboutUS;