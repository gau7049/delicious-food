import React from "react";

function CardsWithReceipes({img, cardTitle, cardText}) {
  return (
    <>
        <div className="card text-bg-dark">
          <img src={img} className="card-img" alt="..." />
          <div className="card-img-overlay carousel-under-under">
            <h2 className="card-title">{cardTitle}</h2>
            <p className="card-text">{cardText}</p>
            <button className="green-background-with-left-border">
              See Full Receipe
            </button>
          </div>
        </div>
      
    </>
  );
}

export default CardsWithReceipes;
