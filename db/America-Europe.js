const mongoose = require("mongoose");
require("../config/config.recipes");
const Recipe = require("../models/Recipe.model");
require("./index")

let recipes = [
  {
    name: "burger",
    continent: "America",
    meal: "lunch",
    veg: false,
  },
  {
    name: "pancakes",
    continent: "America",
    meal: "lunch",
    veg: true,
  },
  {
    name: "pizza",
    continent: "Europe",
    meal: "dinner",
    veg: false,
  },
  {
    name: "paella",
    continent: "Europe",
    meal: "lunch",
    veg: false,
  },
];


Recipe.insertMany(recipes)
  .then((addedRecipes) => {
    addedRecipes.forEach((recipe) => console.log(recipe.name)); // to console.log each added name
  })
  .catch((err) => {
    console.log("Error with mongoose method", err);
  });




