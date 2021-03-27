import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Notifications from "./components/Notifications";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

// TO DO
// if there are notifications, give each item an onClick event to trigger the recipe search
// show 1 recipe, onClick recipe details open up in a popup (button to save to your recipe repo)

const storage = [
  "sesame",
  "red lentils",
  "cocoa powder",
  "matcha pulver",
  "dried apricots",
];

function Page() {
  const classes = useStyles();

  // OPEN SEARCH MODAL
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // SEARCH RECIPES
  const API_KEY = process.env.REACT_APP_API;
  const INGREDIENT_LIST = ["bananas", "apples", "cheese", "crackers"];

  let requestString =
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
  const ingredientsString = INGREDIENT_LIST.map(
    (ingredient) => ingredient + "%2C"
  );
  requestString = requestString + ingredientsString;

  useEffect(() => {
    fetch(`${requestString}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Notifications open={open} handleClose={handleClose} />
      <ul>
        {storage.map((item) => (
          <>
            <li>{item}</li>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              consume
            </Button>
          </>
        ))}
      </ul>
      <div>after clicking on btn, this section shows a recipe suggestion</div>
    </div>
  );
}

export default Page;
