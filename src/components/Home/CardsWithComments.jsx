import React from 'react'

function CardsWithComments({image, receipeName, comments, date}) {
  return (
    <>
       
          <img src={image} alt="" />
          <div>
            <span>{date}</span>
            <h3>{receipeName}</h3>
            <div id="star-sector">
              <i className="ri-star-s-fill star"></i>
              <i className="ri-star-s-fill star"></i>
              <i className="ri-star-s-fill star"></i>
              <i className="ri-star-s-fill star"></i>
              <i className="ri-star-s-line star"></i>
            </div>
            <p className="comment">{comments}</p>
          </div>
        
    </>
  )
}

export default CardsWithComments