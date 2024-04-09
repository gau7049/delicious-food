import React from "react";

// images
import img1 from './images/about/salad.png'
import img2 from './images/about/hamburger.png'
import img3 from './images/about/rib.png'
import img4 from './images/about/pancake.png'

function Reputation() {
  return (
    <>
      <div id="image-section">
        <div id="amazing-receipe">
          <img src={img1} alt="" />
          <h1>1287</h1>
          <h5>Amazing receipes</h5>
        </div>
        <div id="burger-receipe">
          <img src={img2} />
          <h1>25</h1>
          <h5>Burger receipes</h5>
        </div>
        <div id="meat-receipe">
          <img src={img3} alt="" />
          <h1>471</h1>
          <h5>Meat receipies</h5>
        </div>
        <div id="desert-receipe">
          <img src={img4} alt="" />
          <h1>326</h1>
          <h5>Desert receipies</h5>
        </div>
      </div>
    </>
  );
}

export default Reputation;
