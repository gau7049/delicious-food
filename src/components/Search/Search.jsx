import React from "react";
import { useEffect } from "react";
import img from "../images/not-found.png";
import img2 from "../images/search2.jpg";
import { Link } from "react-router-dom";

function Search() {
  const blurFun = () => {
    const blurDis = document.querySelectorAll("#receipeImg");
    const receipeItems = document.querySelectorAll("#item");
    receipeItems.forEach((item) => {
      item.addEventListener("click", async () => {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.dataset.id}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const d = await res.json();

        let meal = d.meals;

        meal = meal[0];

        const htm = `
                <div id='cross'>
                    <button> X </button>
                </div>
                <h2 className='recipe-title'>${meal.strMeal}</h2>
                <p className='receipe-category'>${meal.strCategory}</p>
                <div className="receipe-instruct">
                    <h3>Instructions:</h3>
                    <div className="instruction-para">
                    <p><q>${meal.strInstructions}</q></p>
                    </div>
                </div>          
                <div className="recipe-meal-img">
                    <img src="${meal.strMealThumb}" alt="" />
                </div>
                <div className="receipe-link">
                    <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
                </div>  
                `;

        const mealDetailsContent = document.querySelector(".receipeDetails");
        console.log(mealDetailsContent);
        mealDetailsContent.innerHTML = htm;
        mealDetailsContent.style.display = "block";

        document.body.style.overflow = "hidden";

        const cross = document.querySelector("#cross button");
        console.log(`cross function ${cross}`);
        if (cross) {
          cross.addEventListener("click", () => {
            console.log("erase");
            const meall = document.querySelector(".receipeDetails");
            meall.style.display = "none";
            document.body.style.overflow = "visible";
          });
        }
      });
    });
    console.log(receipeItems);
    // console.log(blurDis);
    blurDis.forEach((div) => {
      const img = div.querySelector("img");
      function loaded() {
        div.classList.add("loaded");
        // console.log("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  };

  const searchBtn = async () => {
    // const spinner = document.querySelector(".basic-loader");
    // spinner.style.display = "flex";

    const mealList = document.querySelector("#content");
    let html = "";
    const item = document
      .querySelector("#search #inputSearch input")
      .value.trim();

    if (item == "") {
        html += `
                <div id="not-found">
                    <img src=${img} />
                </div>
                `
                mealList.style.justifyContent = "start";
                mealList.innerHTML = html;
      return;
    }

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${item}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // setMeals(data.meals); // Assuming the API response has a "meals" property

      if (data.meals) {
        data.meals.map((meal) => {
          html += `
                    <div className="receipeItem" id="item" data-id = "${meal.idMeal}">
                        
                        <div id="receipeImg">
                            <img src="${meal.strMealThumb}" alt="" />
                        </div>
                        <div className="itemName">
                            <h4>${meal.strMeal}</h4>
                        </div>
                        <div id="seeReceipe">
                            <button className='green-background-with-left-border'>See Receipe</button>
                        </div>
                    </div>
                    `;
        });
        setTimeout(blurFun, 1000);
      } else {
        html += `
                <div id="not-found">
                    <img src=${img} />
                </div>
                `
      }
      mealList.style.justifyContent = "start";
      mealList.innerHTML = html;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const loading = () => {
    const meal = document.querySelector("#content");
    meal.style.justifyContent = "center";
    meal.innerHTML = `
            <div class="basic-loader">
            <i class="ri-restaurant-line"></i>
            </div>
            `;
    setTimeout(searchBtn, 3000);
    

  };

  return (
    <>
      <div id="search">
        <div id="inputSearch">
          <input
            list="receipe"
            type="search"
            placeholder="Search Delicious Receipes"
          />
          <datalist id="receipe">
            <option value="Beef"></option>
            <option value="Egg"></option>
            <option value="Chicken"></option>
            <option value="Banana"></option>
            <option value="Carrot"></option>
            <option value="Garlic"></option>
            <option value="Bread"></option>
            <option value="Butter"></option>
            <option value="Pototoes"></option>
            <option value="Brie"></option>
            <option value="Broccoli"></option>
            <option value="Honey"></option>
            <option value="Jam"></option>
            <option value="Lamb"></option>
            <option value="Strawberries"></option>
            <option value="Sugar"></option>
            <option value="Chilli"></option>
          </datalist>
          <i onClick={loading} className="ri-search-line"></i>
        </div>
      </div>

      <h3 style={{ padding: "0 4vw" }}>Search Items: </h3>

      <div id="content">
        {/* <div className="receipeItem">
                <div id="receipeImg"  style={{"backgroundImage": "url('../images/blur.jpg')"}}>
                    <img src={img} alt="" loading="lazy"  />
                </div>
                <div className="itemName">
                    <h4>Burger</h4>
                </div>
                <div className="seeReceipe">
                    <button className='green-background-with-left-border'>See Receipe</button>
                </div>
            </div> */}

        {/* <div class="basic-loader">
        <i class="ri-restaurant-line"></i>
    </div> */}
        <div id="not-found">
          <img src={img2} />
        </div>
      </div>

      <div className="receipeDetails">
        {/* <div id='cross'>
                <button> X </button>
            </div>
            <h2 className='recipe-title'>Meals Name Here</h2>
            <p className='receipe-category'>Category Name</p>
            <div className="receipe-instruct">
                <h3>Instructions:</h3>
                <div className="instruction-para">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, dolores. Perspiciatis asperiores perferendis magni cupiditate excepturi. Nobis commodi voluptatum id suscipit, alias deleniti explicabo aliquam aspernatur sint necessitatibus ipsam tempore.</p>
                </div>
            </div>          
            <div className="recipe-meal-img">
                <img src={img} alt="" />
            </div>
            <div className="receipe-link">
                <Link to="/">Watch Video</Link>
            </div>   */}
      </div>
    </>
  );
}

export default Search;
