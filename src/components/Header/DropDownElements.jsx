import React from "react";
import { NavLink } from "react-router-dom";

function DropDownElements({ hint }) {
  return (
    <>
        

        {hint != null ? <p>Catagory</p> : ""}
        <NavLink to="/home">Home</NavLink>
        <NavLink to={"/about"}>About Us</NavLink>
        <NavLink to={"/blog-post"}>Blog Post</NavLink>
        <NavLink to={"/receipe-post"}>Receipe Post</NavLink>
        <NavLink to={"contact"}>Contact</NavLink>
        <NavLink to={"elements"}>Elements</NavLink>

      
    </>
  );
}

export default DropDownElements;
