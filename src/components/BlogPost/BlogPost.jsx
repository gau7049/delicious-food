import React, { useEffect } from "react";
import Hero from "../Hero";
import Quote from "../Quote";
import Subscribe from "../Subscribe";
import BlogCards from "./BlogCards";

// images
import img1 from "../images/blog/1.jpg";
import img2 from "../images/blog/2.jpg";
import img3 from "../images/blog/3.jpg";

function BlogPost() {

  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load");
    blurDivs.forEach((div) => {
      const img = div.querySelector("img");
      function loaded() {
        div.classList.add("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  }, []);

  return (
    <>

      <Hero klass="blogImg" title="Blog" />

      <div className="apnaContainer">
        <div className="leftSide">
          <div id="firstpg">
            <BlogCards img={img1} title="How to find amazing restaurants in your city" />
          </div>

          <div id="secondpg">
            <BlogCards img={img2} title="10 tips to live a healthy life"/>
          </div>

          <div id="thirdpg">
            <BlogCards img={img3} title="5 Tips on how to cook the best hamburger"/>
          </div>

          <div id="numbers">
            <span id="green-color">01.</span>
            <span>02.</span>
            <span>03.</span>
          </div>
        </div>

        <div className="rightSide">
          <div className="listt">
            <h6>Archive</h6>
            <ul>
              <li>March 2018</li>
              <li>February 2018</li>
              <li>January 2018</li>
              <li>December 2017</li>
              <li>November 2017</li>
            </ul>
          </div>

          <div className="listt">
            <h6>Categories</h6>
            <ul>
              <li>Restaurants</li>
              <li>Food & Drinks</li>
              <li>Vegans</li>
              <li>Events & Lifestyle</li>
              <li>Uncategorized</li>
            </ul>
          </div>

          <div id="newsletter">
            <h6>Newsletter</h6>

            <Subscribe />
            <Quote />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
