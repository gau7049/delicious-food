import React from 'react'

function BlogCards({img, heading}) {
  return (
    <>
        <div
              className="blur-load"
              style={{ backgroundImage: "url('../images/blur.jpg')" }}
            >
              <img src={img} alt="" loading="lazy" />
            </div>

            <div className="content">
              <h4>{heading}</h4>
              <p>
                by <span>Maria Williams</span> in <span>Restaurants</span>
              </p>

              <div className="more-content">

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
                  pellentesque tortor. Aenean congue sed metus in iaculis. Cras
                  a tortor enim. Phasellus posuere vestibulum ipsum, eget
                  lobortis purus. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>

              </div>
            </div>

            <button className="green-background-with-left-border">
              Read More
            </button>
    </>
  )
}

export default BlogCards