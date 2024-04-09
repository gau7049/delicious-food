import React from 'react'

// Images
import img2 from "../images/bg1.jpg";
import img3 from "../images/bg3.jpg";
import img4 from "../images/bg7.jpg";

function Carousel() {
  return (
    <>
        <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide carousel-mine"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img2} className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={img3} className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={img4} className="d-block" alt="..." />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span id="prev" aria-hidden="true">
                      Prev
                    </span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span id="nxt" aria-hidden="true">
                      Next
                    </span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
    </>
  )
}

export default Carousel