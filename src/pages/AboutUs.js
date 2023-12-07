import React from "react";
import Mlwany from "../assets/AboutUS/single-image3.jpg"
import Mlwany1 from "./assets/AboutUS/insta-item1.jpg"
import Mlwany2 from "./assets/AboutUS/insta-item2.jpg"
import Mlwany3 from "./assets/AboutUS/insta-item3.jpg"
import Mlwany4 from "./assets/AboutUS/insta-item4.jpg"
import Mlwany5 from "./assets/AboutUS/insta-item5.jpg"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutUS =()=>{
    return(
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
            <div class="container" placeholder="Your Emaill Adress">
                <form>
                    <div className="leftForm">
                        <h1>SUBSCRIBE US NOW</h1>
                        <p>Get latest news, updates and deals directly mailed to your inbox.</p>                    </div>
                    <div className="email">
                        <input type="email"/>
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
        
    );
}
export default AboutUS;