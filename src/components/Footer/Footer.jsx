import React from "react";

// images
import insta1 from "../images/insta1.jpg";
import insta2 from "../images/insta2.jpg";
import insta3 from "../images/insta3.jpg";
import insta4 from "../images/insta4.jpg";
import insta5 from "../images/insta5.jpg";
import insta6 from "../images/insta6.jpg";
import insta7 from "../images/insta7.jpg";
import img8 from "../images/logo (1).png";
import Icons from "../Icons";

const imageArray = [
  { num: "1", imgSrc: insta1 },
  { num: "2", imgSrc: insta2 },
  { num: "3", imgSrc: insta3 },
  { num: "4", imgSrc: insta4 },
  { num: "5", imgSrc: insta5 },
  { num: "6", imgSrc: insta6 },
  { num: "7", imgSrc: insta7 },
];

function Footer() {
  return (
    <>
      <div id="follow-us-instagram">
        <h5>Follow Us Instagram</h5>
        <div id="photos">
          {imageArray.map(({ num, imgSrc }) => (
            <div key={num}>
              <i className="ri-instagram-line"></i>
              <div>
                <img src={imgSrc} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <Icons />
        <img src={img8} alt="" />
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <span>
            <i className="ri-heart-line"></i>
          </span>{" "}
          by Colorlib
        </p>
      </footer>
    </>
  );
}

export default Footer;
