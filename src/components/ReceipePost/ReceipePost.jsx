import React from "react";
import Hero from "../Hero";
import img1 from "../images/receipePost/bg5.jpg";
import ContactBox from "../ContactBox";

function ReceipePost() {
  const Ingradient = [
    { num: "1", name: "1/4 cup extra-virgin olive oil" },
    { num: "2", name: "1 cup cherry tomatoes, halved" },
    { num: "3", name: "1 cucumber, sliced" },
    { num: "4", name: "1/2 red bell pepper, thinly sliced" },
    { num: "5", name: "1/2 yellow bell pepper, thinly sliced" },
    { num: "6", name: "1/4 cup red onion, thinly sliced" },
    { num: "7", name: "1/2 cup feta cheese, crumbled" },
  ];

  return (
    <>

      <Hero klass="receipeImg" title="Recipe" />
      <div id="receipeSelection">
        <div>
          <div>
            <select name="" id="">
              <option value="">All Receipies Categories</option>
              <option value="">All Receipies Categories 2</option>
              <option value="">All Receipies Categories 3</option>
              <option value="">All Receipies Categories 4</option>
              <option value="">All Receipies Categories 5</option>
            </select>
          </div>

          <div>
            <select name="" id="">
              <option value="">All Receipies Categories</option>
              <option value="">All Receipies Categories 2</option>
              <option value="">All Receipies Categories 3</option>
              <option value="">All Receipies Categories 4</option>
              <option value="">All Receipies Categories 5</option>
            </select>
          </div>

          <input type="search" name="" id="" placeholder="Search Receipies" />
        </div>

        <button className="green-background-with-left-border">Search</button>
      </div>

      <div id="receipeCarousel">
        <div
          id="carouselExampleAutoplaying1"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img1} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying1"
            data-bs-slide="prev"
          >
            <span class="prev" aria-hidden="true">
              Prev
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying1"
            data-bs-slide="next"
          >
            <span class="nxt" aria-hidden="true">
              Next
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 box1 ">
            <div className="receipe-headline my-5">
              <span>April 05, 2018</span>
              <h1>Vegetarian cheese salad</h1>
              <div className="receipe-duration">
                <h6>Prep: 15 mins</h6>
                <h6>Cook: 30 mins</h6>
                <h6>Yields: 8 Servings</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 box2">
            <div className="receipe-ratings text-right my-5">
              <div id="star-sector">
                <i class="ri-star-s-fill star"></i>
                <i class="ri-star-s-fill star"></i>
                <i class="ri-star-s-fill star"></i>
                <i class="ri-star-s-fill star"></i>
                <i class="ri-star-s-line star"></i>
              </div>
              <button class="green-background-with-left-border">
                For Begginers
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="single-preparation-step d-flex">
              <h4>01.</h4>
              <p>
                Start by thoroughly washing and drying 2 cups of mixed salad
                greens (lettuce, spinach, arugula, etc.). Place the greens in a
                large salad bowl, ensuring they are crisp and ready for the
                salad.{" "}
              </p>
            </div>
            <div className="single-preparation-step d-flex">
              <h4>02.</h4>
              <p>
                Enhance the salad by adding vibrant and crunchy vegetables.
                Include 1 cup of halved cherry tomatoes, sliced cucumber, thinly
                sliced red and yellow bell peppers, and 1/4 cup of thinly sliced
                red onion to the salad bowl. Introduce a delightful combination
                of cheeses by sprinkling 1/2 cup of crumbled feta and 1/2 cup of
                cubed mozzarella over the vegetables.{" "}
              </p>
            </div>
            <div className="single-preparation-step d-flex">
              <h4>03.</h4>
              <p>
                Craft a flavorful dressing by whisking together 1/4 cup of
                extra-virgin olive oil, 2 tablespoons of balsamic vinegar, 1
                teaspoon of Dijon mustard, and season with salt and pepper to
                taste. Ensure the ingredients are well combined, creating a
                balanced dressing for your salad.{" "}
              </p>
            </div>
            <div className="single-preparation-step d-flex">
              <h4>04.</h4>
              <p>
                Drizzle the prepared dressing over the salad ingredients in the
                bowl. Using salad servers or tongs, gently toss the salad.
                Ensure that the dressing evenly coats each element, infusing the
                salad with a delightful medley of flavors.{" "}
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-4 checkboxs">
            <h4>Ingradients</h4>
            {Ingradient.map(({ num, name }) => {
              return (
                <div key={num}>
                  <input type="checkbox" name="" id={num} />
                  <label htmlFor={num}>{name}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ContactBox title="Leave a comment" />
    </>
  );
}

export default ReceipePost;
