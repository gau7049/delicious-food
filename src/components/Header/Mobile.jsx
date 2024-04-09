import React from "react";
import { NavLink } from "react-router-dom";

const menuu = () => {
  const menu = document.querySelector("#menu-content");
  const body = document.querySelector("body");
  if (menu.style.width == "0px" || menu.style.width == 0) {
    menu.style.width = "100vw";
    menu.style.paddingLeft = "30px";
    menu.style.opacity = 1;
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
    menu.style.width = 0;
    menu.style.paddingLeft = 0;
    menu.style.opacity = 0;
  }
};

function Mobile() {
  return (
      <>
      <div id="menuu">
      <i onClick={menuu} className="ri-menu-line"></i>
        <div onClick={menuu} id="menu-content">
          <h1>Menu</h1>
          <NavLink to="/home">Home</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <NavLink to={"/blog-post"}>Blog Post</NavLink>
          <NavLink to={"/receipe-post"}>Receipe Post</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
          <NavLink to={"elements"}>Elements</NavLink>
        </div>
      </div>
    </>
  );
}

export default Mobile;
