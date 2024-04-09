import React from "react";
import HomeCarousel from "./HomeCarousel";
import Cards from "./Cards";

// images
import img4 from "../images/bg2.jpg";
import img5 from "../images/bg3.jpg";
import img6 from "../images/insta1.jpg";
import img7 from "../images/insta7.jpg";
import img8 from "../images/insta5.jpg";
import img9 from "../images/r4.jpg";
import img10 from "../images/r5.jpg";
import img11 from "../images/r6.jpg";
import img12 from "../images/sr1.jpg";
import img13 from "../images/sr2.jpg";
import img14 from "../images/sr3.jpg";
import img15 from "../images/sr4.jpg";
import img16 from "../images/sr5.jpg";
import img17 from "../images/sr6.jpg";
import img18 from "../images/sr7.jpg";
import img19 from "../images/sr8.jpg";
import img20 from "../images/sr9.jpg";
import img21 from "../images/add.png";
import Carousel from "./HomeCarousel";
import CardsWithReceipes from "./CardsWithReceipes";
import CardsWithComments from "./CardsWithComments";
import Quote from "../Quote";
import Subscribe from "../Subscribe";
import ReactToTop from "../ReactToTop";
import { NavLink } from "react-router-dom";
import useLogin from "../Context/Context";
import LoginPage from "../LoginPage";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {

  const {isLoggedIn, setIsLoggedIn} = useLogin();

  let auth = getAuth();

  useEffect(() => {
    // // When the component mounts, check if there's a value in localStorage
    // const storedValue = localStorage.getItem('myValue');
    // if (storedValue) {
    //   // If there is, set the state to that value
    //   setIsLoggedIn(storedValue);
    // }

    onAuthStateChanged(auth, (data) => {
      data ? setIsLoggedIn(true) : setIsLoggedIn(false);
    })

  }, []);

  const cardsComments = [
    {
      num: "1",
      img: img12,
      d: "January 04, 2018",
      title: "Homemade italian pasta",
      comment: "2 Comments",
    },
    {
      num: "2",
      img: img13,
      d: "January 04, 2018",
      title: "Baked Bread",
      comment: "2 Comments",
    },
    {
      num: "3",
      img: img14,
      d: "January 04, 2018",
      title: "Scalops on salt",
      comment: "2 Comments",
    },
    {
      num: "4",
      img: img15,
      d: "January 04, 2018",
      title: "Fruits on plate",
      comment: "2 Comments",
    },
    {
      num: "5",
      img: img16,
      d: "January 04, 2018",
      title: "Macaroons",
      comment: "2 Comments",
    },
    {
      num: "6",
      img: img17,
      d: "January 04, 2018",
      title: "Chocolate tart",
      comment: "2 Comments",
    },
    {
      num: "7",
      img: img18,
      d: "January 04, 2018",
      title: "Berry Desert",
      comment: "2 Comments",
    },
    {
      num: "8",
      img: img19,
      d: "January 04, 2018",
      title: "Zucchini Grilled on peper",
      comment: "2 Comments",
    },
    {
      num: "9",
      img: img20,
      d: "January 04, 2018",
      title: "Chicken Salad",
      comment: "2 Comments",
    },
  ];

  console.log("inside Home section", isLoggedIn, localStorage.getItem('myValue'))

  return (
    <>

      {
        !isLoggedIn ?
          <LoginPage />
        : (
          <> 
      <HomeCarousel />

      <div className="carousel-under">
        <CardsWithReceipes
          img={img4}
          cardTitle="Strawberry Cake"
          cardText="Simple & Delicious"
        />
        <CardsWithReceipes
          img={img5}
          cardTitle="Chinesse Noodles"
          cardText="Simple & Delicious"
        />
      </div>

      <h1 id="best-rec">The Best Receipes</h1>

      <div className="container">
        <div className="row">
          <Cards image={img6} receipeName={"Shushi Easy Receipe"} />
          <Cards image={img7} receipeName={"Homemade Burger"} />
          <Cards image={img8} receipeName={"Vegan Smoothie"} />
        </div>
        <div className="row">
          <Cards image={img9} receipeName={"Calabasa soup"} />
          <Cards image={img10} receipeName={"Homemade Breakfast"} />
          <Cards image={img11} receipeName={"Healthy Fruit Desert"} />
        </div>
      </div>

      <div id="main">
        <div id="main-1">
          <h1>Gluten Free Receipies</h1>
          <p>
            Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque
            accumsan molestie. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque.
            Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh
          </p>
          
          <NavLink to={'/search'}>
          <button className="green-background-with-left-border">
            Discover All The Receipies
          </button>
          </NavLink>
        </div>
      </div>

      <div className="container-mine">
        {cardsComments.map(({ num, d, title, img, comment }) => {
          return (
            <div className="container-mine-card" key={num}>
              <CardsWithComments
                date={d}
                receipeName={title}
                image={img}
                comments={comment}
              />
            </div>
          );
        })}
      </div>

      <div id="last-second">
        <Quote />
        <div id="subscribe">
          <h4>Subscribe to our newsletter</h4>
          <Subscribe />
        </div>
        <div id="offer">
          <img src={img21} alt="" />
        </div>
      </div>
          </>
        )
      }
  
    </>
  );
}

export default Home;
