import React, { useEffect } from "react";
import Header from "./components/Header";
import Notifications from "./components/Notifications";

// TO DO
// if there are notifications, give each item an onClick event to trigger the recipe search
// show 1 recipe, onClick recipe details open up in a popup (button to save to your recipe repo)

// .get(requestString)
// .header("X-RapidAPI-Key", API_KEY)
// .end(function (result) {
//   if (result.status === 200) {
//     getRecipeData(result.body);
//   }
// });

function Page() {
  const API_KEY = process.env.REACT_APP_API;
  const INGREDIENT_LIST = ["bananas", "apples", "cheese", "crackers"];

  let requestString =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/find" +
    "ByIngredients?number=5&ranking=1&ingredients=";
  const ingredientsString = INGREDIENT_LIST.map(
    (ingredient) => ingredient + "%2C"
  );
  requestString = requestString + ingredientsString;

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Notifications />
      <button>find me a recipe for this item</button>
      <div>after clicking on btn, this section shows a recipe suggestion</div>
    </div>
  );
}

export default Page;
