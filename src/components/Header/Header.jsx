import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// images
import img1 from "../images/logo (1).png";
import Mobile from "./Mobile";
import Icons from "../Icons";
import DropDownElements from "./DropDownElements";
import Carousel from "./Carousel";
import App from "../../App";
import useLogin from "../Context/Context";
import { getAuth, signOut } from "firebase/auth";

function Header() {

  let auth = getAuth();

  const {isLoggedIn, setIsLoggedIn} = useLogin();
  const navigate = useNavigate();

  console.log("Loggedin Home", isLoggedIn)

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    return storedDarkMode !== null ? storedDarkMode : false;
  });

  useEffect(() => {
    const parent = document.querySelector("#root");
    const body = document.querySelector("body");
    const btn = document.querySelector(".dark-mode-btn button");

    if (isDarkMode) {
      parent.classList.add("dark");
      body.style.backgroundColor = "#070F2B";
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
      btn.textContent = "Light";
    } else {
      parent.classList.remove("dark");
      body.style.backgroundColor = "white";
      btn.style.backgroundColor = "white";
      btn.style.color = "black";
      btn.textContent = "Dark";
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className="upper-nav" id="reachToTop">
        <h4>Hello Foodie!</h4>

        <Icons />
      </div>

      <div className="main-nav">
        <img src={img1} alt="" />
        
        <Mobile />

        <div id="inner-main-nav">
          <NavLink to="/home" className="no-underline">
            <h6>HOME</h6>
          </NavLink>

          <div className="dropdown">
            <button className="dropbtn">
              <h6>
                PAGES <i className="ri-arrow-down-s-line"></i>
              </h6>
            </button>
            <div className="dropdown-content">
              <DropDownElements />
            </div>
          </div>

          <div className="megaDropdown">
            <button className="megaDropbtn">
              <h6>
                MEGA MENU <i className="ri-arrow-down-s-line"></i>
              </h6>
            </button>
            <div className="megaDropdown-content">
              {["1", "2", "3"].map((nums) => {
                return (
                  <div id={`grp${nums}`} key={nums}>
                    <DropDownElements hint="megaDropdown" />
                  </div>
                );
              })}
              <div id="grp4">
                <Carousel />
              </div>
            </div>
          </div>

          {["RECEIPES", "4 VEGANS"].map((word) => {
            return (
              <NavLink to={"/receipe-post"} key={word}>
                <h6>{word}</h6>
              </NavLink>
            );
          })}

          <NavLink to={'/contact'}>
            <h6>CONTACT</h6>
          </NavLink>

          <div>
            <NavLink to="/search">
              <i className="ri-search-line"></i>
            </NavLink>
          </div>

          <div className="dark-mode-btn">
            <button onClick={toggleDarkMode}>Dark</button>
          </div>

          <div>
            <button className="btn-logout" onClick={() => {
                signOut(auth)
                setIsDarkMode(false);
               navigate('/login');
              }}>
                <h6>
                LOG OUT
                </h6>
                </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;