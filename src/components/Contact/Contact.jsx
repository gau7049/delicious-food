import React from 'react'
import Hero from '../Hero'
import img1 from '../images/logo (1).png'
import ContactBox from '../ContactBox'

function Contact() {
  return (
    <>

      <Hero klass='contactImg' title='Recipe'/>

      <div id="contactContainer">
        <img src={img1} alt="" />
        <div id="container-ka-container">
          <div id="ckc-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. 
            </p>
            <p>
              Orci varius natoque penatibus et magnis dis ac pellentesque
              tortor. Aenean congue parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div id="ckc-info">
            <div>
              <span>Address:</span>
              <p>481 Creekside Lane Avila <br />
              Beach, CA 93424</p>
            </div>
            <div>
              <span>Phone:</span>
              <p>+53 345 7953 32453 <br /> +53 345 7557 822112</p>
            </div>
            <div>
              <span>Email:</span>
              <p>yourmail@gmail.com</p>
            </div>
          </div>
          <div id="inner-subscription">
            <input type="text" placeholder="Subscribe to newsletter" />
            <button className="green-background-with-left-border">Subscribe</button>
            <p>
              Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque
              accumsan molestie.
            </p>
          </div>
        </div>
      </div>

      <ContactBox title='Get In Touch'/>

    </>
  )
}

export default Contact