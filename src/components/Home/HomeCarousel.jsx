import React from 'react'

// images
import img1 from '../images/bg1.jpg'
import img2 from '../images/bg3.jpg'
import img3 from '../images/bg7.jpg'

function HomeCarousel() {

  const close = (e) => {
    e.target.parentElement.parentElement.style.display = "none";
    document.body.style.overflow = "visible";
  }

  const open = () => {
    const r = document.querySelector(".burger");
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
          <button onClick={open} className="green-background-with-left-border">See Receipe</button>
      </div>

      <div className="receipeDetails burger" style={{display: "none"}}>
        <div id='cross'>
                <button onClick={close}> X </button>
            </div>
            <h2 className='recipe-title'>Delicious Burger</h2>
            <p className='receipe-category'>Burger</p>
            <div className="receipe-instruct">
                <h3>Instructions:</h3>
                <div className="instruction-para">
                    <p>To start, gather your ingredients: ground beef, breadcrumbs, an egg, onions, garlic, salt, pepper, burger buns, and your favorite toppings and condiments. Preheat your grill or skillet to medium-high heat. In a mixing bowl, combine the ground beef with breadcrumbs, beaten egg, diced onions, minced garlic, salt, and pepper, being careful not to overwork the mixture. Shape the mixture into patties slightly larger than your burger buns, making a slight indentation in the center of each to prevent bulging during cooking. Cook the patties on the preheated grill or skillet for about 4-5 minutes per side until they reach your desired level of doneness. While the patties cook, you can optionally toast the burger buns. Once the patties are done, assemble your burgers by placing them on the bottom half of each bun, adding your preferred toppings and condiments, then placing the top half of the bun. Serve your homemade burgers hot and enjoy the delicious flavors!</p>
                </div>
            </div>          
            <div className="recipe-meal-img">
                <img src={img1} alt="" />
            </div>
            <div className="receipe-link">
                <a href="https://youtu.be/_q5GKCNZcHI?si=4OS-Z07Sc7sayTm3" target='_blank'>Watch Video</a>
            </div>  
      </div>



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