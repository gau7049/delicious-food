import React from "react";

function Cards({image, receipeName}) {
  return (
    <>
      <div className="col">
        <img src={image} alt="" />
        <h5>{receipeName}</h5>
        <div id="star-sector">
          <i className="ri-star-s-fill star"></i>
          <i className="ri-star-s-fill star"></i>
          <i className="ri-star-s-fill star"></i>
          <i className="ri-star-s-fill star"></i>
          <i className="ri-star-s-line star"></i>
        </div>
      </div>
    </>
  );
}

export default Cards;
