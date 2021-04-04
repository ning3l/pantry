import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import RecipeSearchDialog from "./components/RecipeSearchDialog";
import ExpiringItemsList from "./components/ExpiringItemsList";
import RecipeSuggestions from "./components/RecipeSuggestions";
import { Grid, Paper, AppBar, Toolbar, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "pink",
    //backgroundColor: theme.palette.background.paper,
  },
}));

// TO DO
// if there are notifications, give each item an onClick event to trigger the recipe search
// show 1 recipe, onClick recipe details open up in a popup (button to save to your recipe repo)

const storage = ["sesame", "red lentils", "matcha pulver"];

function Page() {
  const classes = useStyles();

  // SEARCH RECIPES DIALOG
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("open dialog");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // put this in its own context !!!
  // SEARCH RECIPES FUNCTIONALITY
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (itemList: string[]) => {
    // build request str
    let requestString =
      "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
    let ingredientString = itemList.map((item) => item + "%2C");
    requestString = requestString + ingredientString;

    // fetch recipes
    fetch(`${requestString}&apiKey=${process.env.REACT_APP_API}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // const API_KEY = process.env.REACT_APP_API;
  // const INGREDIENT_LIST = ["bananas", "apples", "cheese", "crackers"];

  // let requestString =
  //   "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
  // const ingredientsString = INGREDIENT_LIST.map(
  //   (ingredient) => ingredient + "%2C"
  // );
  // requestString = requestString + ingredientsString;

  // useEffect(() => {
  //   fetch(`${requestString}&apiKey=${API_KEY}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <Header />
      {/* <RecipeSearchDialog open={open} handleClose={handleClose} /> */}
      {/* these grids center the list on screen. why is grey zone not 100vh? */}
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <ExpiringItemsList
            open={open}
            handleClose={handleClose}
            handleClickOpen={handleClickOpen}
            handleSearch={handleSearch}
          />
        </Grid>
      </Grid>
      <RecipeSuggestions />
    </div>
  );
}

export default Page;
