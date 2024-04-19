import React, {useState, useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Mobile() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    return storedDarkMode !== null ? storedDarkMode : false;
  });

  const [isOpenMenu,setIsOpemMenu] = useState(false);
  const navigate = useNavigate();
  
  const menuu = () => {
    setIsOpemMenu(() => !isOpenMenu)

    const menu = document.querySelector("#menu-content");
    menu.style.transition = "0.2s all linear"
    const body = document.querySelector("body");

    if (isOpenMenu) {
      menu.style.width = "60vw";
      menu.style.opacity = 1;
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
      menu.style.width = 0;
      menu.style.opacity = 0;
    }
  };

  useEffect(() => {
    setIsOpemMenu(true);
  },[])
  
  useEffect(() => {
   
    const parent = document.querySelector("#root");
    const body = document.querySelector("body");
    const btn = document.querySelector("#kkk button");

    if (isDarkMode) {
      parent.classList.add("dark");
      body.style.backgroundColor = "#070F2B";
      btn.textContent = "Light";
    } else {
      parent.classList.remove("dark");
      body.style.backgroundColor = "white";
      btn.textContent = "Dark";
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  let auth = getAuth();

  return (
      <>
      <div id="menuu">
      <i onClick={menuu} style = {{color: isDarkMode ?  "white" : "black"}}     className={`${!isOpenMenu ? "ri-close-line" : "ri-menu-line"}`}></i>
        <div id="menu-content">
          <div id="kkk">
          <h1>Menu</h1>
          <button onClick={toggleDarkMode}>Dark</button>
          </div>
          <NavLink to="/home">Home <i className="ri-home-4-line"></i></NavLink>
          <NavLink to={"/search"}>Search <i className="ri-search-line"></i></NavLink>
          <NavLink to={"/about"}>About Us <i className="ri-information-2-line"></i></NavLink>
          <NavLink to={"/blog-post"}>Blog Post <i className="ri-blogger-line"></i></NavLink>
          <NavLink to={"/receipe-post"}>Receipe Post <i className="ri-restaurant-line"></i></NavLink>
          <NavLink to={"/contact"}>Contact <i className="ri-contacts-book-line"></i></NavLink>
          <div id="logoutPhone">
            <button onClick={() => {
                signOut(auth)
                setIsDarkMode(false);
                setIsOpemMenu(false);
               navigate('/login');
              }}>
              <i className="ri-logout-box-line"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
