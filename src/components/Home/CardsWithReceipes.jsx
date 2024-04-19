import React from "react";
import Popup from "./Popup";

function CardsWithReceipes({img, cardTitle, cardText, Recipe}) {

  const popUp = (Recipe) => {
    const r = document.querySelector(`.${Recipe}`);
    r.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  
  return (
    <>
        <div className="card text-bg-dark">
          <img src={img} className="card-img" alt="..." />
          <div className="card-img-overlay carousel-under-under">
            <h2 className="card-title">{cardTitle}</h2>
            <p className="card-text">{cardText}</p>
            <button className="green-background-with-left-border" onClick={() => popUp(Recipe)} >
              See Full Receipe
            </button>
          </div>
        </div>

        <Popup Recipe={Recipe} img={img} />
      
    </>
  );
}

export default CardsWithReceipes;
