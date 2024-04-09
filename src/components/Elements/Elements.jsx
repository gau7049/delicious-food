import React from "react";

// images
import img1 from "../images/about/salad.png";
import img2 from "../images/about/hamburger.png";
import img3 from "../images/about/rib.png";
import img4 from "../images/about/pancake.png";
import img5 from "../images/elements/receipies.png";
import img6 from "../images/elements/imggg.png";
import img7 from "../images/elements/loaderImg.png";
import img8 from "../images/elements/loaderImg2.png";
import img9 from "../images/elements/hamburger2.png";
import img10 from "../images/elements/pizza.png";
import img11 from "../images/elements/cake2.png";
import Hero from "../Hero";
import Reputation from "../Reputation";

function Elements() {
  const accor = (accorid, accorclass) => {
    const para = document.querySelector(`.${accorclass} p`);
    const bttn = document.querySelector(`button[id=${accorid}]`);

    console.log(accorclass);
    console.log(accorid);

    const open = para.style.opacity;

    if (open == "" || open === "0") {
      gsap.to(bttn, {
        backgroundColor: "rgb(64, 186, 55)",
        // backgroundColor: "#211951",
        color: "white",
        delay: -1,
      });
      gsap.to(para, {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        opacity: 1,
        display: "block",
        paddingRight: 10,
        delay: -1,
      });
      gsap.to(para, {
        height: "auto",
      });
    } else {
      gsap.to(bttn, {
        backgroundColor: "rgb(243, 245, 248)",
        color: "gray",
        delay: -1,
      });
      gsap.to(para, {
        height: 0,
        display: "none",
        opacity: 0,
        duration: 0.4,
      });
      gsap.to(para, {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        duration: 0.2,
        delay: 0.2,
      });
    }
  };

  const id1 = "firstBtn",
    id2 = "secBtn",
    id3 = "thirdBtn";
  const class1 = "firstAccor",
    class2 = "secAccor",
    class3 = "thirdAccor";

  const firstbtn = () => {
    console.log("called first");
    accor(id1, class1);
  };

  const secbtn = () => {
    accor(id2, class2);
  };

  const thirdbtn = () => {
    accor(id3, class3);
  };

  return (
    <>

      {/* <Hero klass="elementsImg" title="Elements" />

      <div id="elementsButtons">
        <h2>Buttons</h2>
        {["one", "two", "three", "four"].map((num) => {
          return (
            <button
              className="green-background-with-left-border"
              id={num}
              key={num}
            >
              See Receipe
            </button>
          );
        })}
      </div>

      <div id="headingOfAccordiansAndTabs">
        <h2>Accordians & Tabs</h2>
      </div>

      <div id="accordiansAndTabs">
        <div>
          <div onClick={firstbtn} className="ownAccordians">
            <button id={id1}>
              Aenean Hendrerit Varius Massa Quis Laoreet.
            </button>
            <div className={`hidden ${class1}`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam vulputate id justo
                quis facilisis.
              </p>
            </div>
          </div>
          <div onClick={secbtn} className="ownAccordians">
            <button id={id2}>Hendrerit Varius Massa Quis Laoreet.</button>
            <div className={`hidden ${class2}`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam vulputate id justo
                quis facilisis.
              </p>
            </div>
          </div>
          <div onClick={thirdbtn} className="ownAccordians">
            <button id={id3}>
              Aenean Hendrerit Varius Massa Quis Laoreet.
            </button>
            <div className={`hidden ${class3}`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam vulputate id justo
                quis facilisis.
              </p>
            </div>
          </div>
        </div>
        <div id="ownTabs">
          <div>
            <button>Varius massa</button>
            <button>Hendrerit varius</button>
            <button>Aenean hendrerit</button>
          </div>

          <p>
            Integer nec bibendum lacus. Praesent malesuada congue, Suspendisse
            dictum enim sit amet libero malesu ada feugiat. Praesent malesuada
            congue magna at finibus. In hac habitasse platea dictumst. Curabitur
            rhoncus auctor eleifend. Praesent malesuada congue.
          </p>
        </div>
      </div>

      <div id="sec-about" className="elementMilestone">
        <h2 className="text-start">Milestone</h2>

        <Reputation />
      </div> */}

      <div id="iconBoxes">
        <h2>
          Icon Boxes
        </h2>
        <div>
          <div>
            <div className="imgAndHeading">
              <img src={img9} alt="" />
              <h4>Amazing Recipies</h4>
            </div>
            <div className="contentOfIconBoxes">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor.
              </p>
            </div>
          </div>
          <div>
            <div className="imgAndHeading">
              <img src={img10} alt="" />
              <h4>Italian Food</h4>
            </div>
            <div className="contentOfIconBoxes">
              <p>
              Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibu.
              </p>
            </div>
          </div>
          <div>
            <div className="imgAndHeading">
              <img src={img11} alt="" />
              <h4>Sweet & Cakes</h4>
            </div>
            <div className="contentOfIconBoxes">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Elements;
