import React from 'react'

// images
import img1 from '../images/bg1.jpg'
import img2 from '../images/bg3.jpg'
import img3 from '../images/bg7.jpg'
import Popup from './Popup'
import { useState } from 'react'

function HomeCarousel() {

  const [showPopup, setShowPopup] = useState(false);

  const popUp = (Recipe) => {
    const r = document.querySelector(`.${Recipe}`);
    r.style.display = "block";
    document.body.style.overflow = "hidden";
  }


  return (
    <>
    
    <div className="main">

      {/* Upper description box */}
     <div className="carousel-upper-box">
          <h2>Delicious Homemade Burger</h2>
          <p>
          Treat yourself to delicious homemade burgers, where fresh ingredients and tasty combinations come together.
          </p>
          <button onClick={() => popUp("burger")} className="green-background-with-left-border">See Receipe</button>
      </div>

      <Popup Recipe="burger" img={img1} />

        <div
          id="carouselExampleAutoplaying1"
          className="carousel slide carousel-mine"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">

              {/* carousel images  */}
              <img src={img1} loading='lazy' className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} loading='lazy' className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} loading='lazy' className="d-block w-100" alt="..." />


            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying1"
            data-bs-slide="prev"
          >

            {/* Prev Button */}
            <span id="prev" aria-hidden="true">
              Prev
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying1"
            data-bs-slide="next"
          >

            {/* Next Button */}
            <span id="nxt" aria-hidden="true">
              Next
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        </div>

    </>
  )
}

export default HomeCarousel