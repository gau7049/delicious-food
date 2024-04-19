import React, { useEffect } from "react";

function Popup({Recipe, img}) {

   const close = (e) => {
    e.target.parentElement.parentElement.style.display = "none";
    document.body.style.overflow = "visible";
   }

  const t = {
    burger: {
        title: "Delicious Burger",
        category: "Burger",
        intro: "To start, gather your ingredients: ground beef, breadcrumbs, an egg, onions, garlic, salt, pepper, burger buns, and your favorite toppings and condiments. Preheat your grill or skillet to medium-high heat. In a mixing bowl, combine the ground beef with breadcrumbs, beaten egg, diced onions, minced garlic, salt, and pepper, being careful not to overwork the mixture. Shape the mixture into patties slightly larger than your burger buns, making a slight indentation in the center of each to prevent bulging during cooking. Cook the patties on the preheated grill or skillet for about 4-5 minutes per side until they reach your desired level of doneness. While the patties cook, you can optionally toast the burger buns. Once the patties are done, assemble your burgers by placing them on the bottom half of each bun, adding your preferred toppings and condiments, then placing the top half of the bun. Serve your homemade burgers hot and enjoy the delicious flavors!",
        link: "https://youtu.be/_q5GKCNZcHI?si=4OS-Z07Sc7sayTm3",
    },
    strawberry: {
        title: "Strawberry Cake",
        category: "Sweet",
        intro: "To make strawberry cake, preheat oven to 350°F, grease two 9-inch cake pans. Whisk 2 cups flour, 2 tsp baking powder, ¼ tsp salt. Cream ½ cup softened butter, 1 cup sugar, beat in 2 eggs, 1 tsp vanilla. Mix in dry ingredients alternating with ½ cup milk. Gently fold in 1 ½ cups diced strawberries. Bake 25-30 mins, cool. For frosting, beat ½ cup softened butter, gradually add 2 cups powdered sugar, 1 tsp vanilla, 2-3 tbsp milk. Frost cake, chill 30 mins. Decorate with fresh strawberries. Enjoy!",
        link: "https://youtu.be/fmD5GnrtOjc?si=M-lDbGRGjNg3132w"
    },
    chineeseNoodles: {
        title: "Chineese Noodles",
        category: "Dish",
        intro: " To make Chinese noodles at home, start by preparing the dough. Mix 2 cups of all-purpose flour with a pinch of salt in a bowl. Gradually add 3/4 cup of water while kneading until the dough is smooth. Cover it with a damp cloth and let it rest for 30 minutes.Next, divide the dough into small portions and roll each into a thin sheet with a rolling pin. Dust with flour to prevent sticking. Fold the sheets into thirds and slice them into thin strips to form noodles. Boil water in a pot and add the noodles. Cook for 2-3 minutes until tender but firm. Drain and rinse under cold water to stop cooking. Now, your homemade Chinese noodles are ready to be used in stir-fries, soups, or noodle dishes. Enjoy your delicious noodles!",
        link: "https://youtu.be/GtQgXCteMpo?si=MsXEu7cKSBr_7hHG"
    }
  }

  return (
    <>
      <div className={`receipeDetails ${Recipe}`} id="ggg">
        <div id="cross" onClick={close}>
          <button>X</button>
        </div>
        <h2 className="recipe-title">{t[Recipe].title}</h2>
        <p className="receipe-category">{t[Recipe].category}</p>
        <div className="receipe-instruct">
          <h3>Instruction:</h3>
          <div className="instruction-para">
            <p>
            {t[Recipe].intro}
            </p>
          </div>
        </div>
        <div className="recipe-meal-img">
          <img src={img} alt="" />
        </div>
        <div className="receipe-link">
          <a href={t[Recipe].link} target="_black">
            Watch Video
          </a>
        </div>
      </div>
    </>
  );
}

export default Popup;
