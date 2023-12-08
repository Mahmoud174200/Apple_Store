import image from '../assets/AboutUs/single-image3.jpg';
import image1 from "../assets/AboutUs/insta-item1.jpg";
import image2 from "../assets/AboutUs/insta-item2.jpg";
import image3 from "../assets/AboutUs/insta-item3.jpg";
import image4 from "../assets/AboutUs/insta-item4.jpg";
import image5 from "../assets/AboutUs/insta-item5.jpg";
import '../css/App01.css';

function App() {
  return (
    <>
    <div className='container'>
        
      <div className='head'>
        <div className='text'>
        <h2>Contact</h2>
        <p>Home &gt; Contact</p>
        </div>
      </div>

      <div className='sec2'>
        <h2>CONTACT INFO</h2>
        <p className='title'>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p> 
           <div className='leftSec'>
            <div className='firstSec'>
            <h3>OFFICE</h3>
            <p className='Address'>730 Glenstone Ave 65802, Springfield, US</p>
            <p className='phone'>+123 987 321</p>
            <p className='phone'>+123 123 654</p>
            <p className='phone'>ministore@yourinfo.com</p>
            </div>
            <div className='secondSec'>
            <h3>MANAGEMENT</h3>
            <p className='Address'>730 Glenstone Ave 65802, Springfield, US</p>
            <p className='phone'>+123 987 321</p>
            <p className='phone'>+123 123 654</p>
            <p className='phone'>ministore@yourinfo.com</p>
            </div>
          </div> 
           <div className='rightSec'>
          <h2 >ANY QUESTIONS?</h2>
          <p className='title'>Use the form below to get in touch with us.</p>
          <input className='firstLine' type='text' placeholder='Write Your Name Here'/>
          <input className='firstLine' type='Email' placeholder='Write Your Email Here'/>
          <input className='PhoneNumber' type='number' placeholder='Phone Number'/>
          <input className='Subject' type='text' placeholder='Write Your Subject Here'/>
          <input className='Message' type='text' placeholder='Write Your Message Here'/>
          <button className='Submit'>Submit</button>
          </div>
      </div>
         <div className='sec3'>
          <div className='img'>
          <img src={image}/>
          </div> 
          <div className='Parag'>
            <h2>OUR STORES</h2>
            <p className='title'>You can also directly buy products from our stores.</p>

            <div className='firstSec'>
              <h3>OFFICE</h3>
              <p className='Address'>730 Glenstone Ave 65802, Springfield, US</p>
              <p className='phone'>+123 987 321</p>
              <p className='phone'>+123 123 654</p>
              <p className='phone'>ministore@yourinfo.com</p>
              </div>
              <div className='secondSec'>
              <h3>USA</h3>
              <p className='Address'>730 Glenstone Ave 65802, Springfield, US</p>
              <p className='phone'>+123 987 321</p>
              <p className='phone'>+123 123 654</p>
              <p className='phone'>ministore@yourinfo.com</p>
              </div>
          </div>
        </div>
        <section class="form">
            <div class="container" placeholder="Your Emaill Adress">
                <form>
                    <div className="leftForm">
                        <h1>SUBSCRIBE US NOW</h1>
                        <p>Get latest news, updates and deals directly mailed to your inbox.</p>    </div>
                    <div className="email">
                        <input type="email"/>
                        <button>Subscripe</button>
                    </div>
                </form>
            </div>
        </section>
            <div class="section4">
            <h1>Shop Our Insta</h1>
            <div class="sub1"><a><img src={image1}/></a></div>
            <div class="sub2"><a><img src={image2}/></a></div>
            <div class="sub3"><a><img src={image3}/></a></div>
            <div class="sub4"><a><img src={image4}/></a></div>
            <div class="sub5"><a><img src={image5}/></a></div>
            </div>

            </div>

    </>
  );
}

export default App;