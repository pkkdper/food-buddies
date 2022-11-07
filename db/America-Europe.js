const mongoose = require("mongoose");
require("../config/config.recipes");
const Recipe = require("../models/Recipe.model");
require("./index")

let recipes = [
  {
    name: "Tater Tot Casserole",
    continent: "America",
    meal: "lunch",
    veg: false,
  },
  {
    name: "Beef Stroganoff",
    continent: "America",
    meal: "dinner",
    veg: true,
  },
  {
    name: "Tamale Pie",
    continent: "Europe",
    meal: "dinner",
    veg: false,
  },
  {
    name: "Sweet Potato Hash",
    continent: "America",
    meal: "lunch",
    veg: true,
  },
  {
    name: "Powder Biscuit",
    continent: "America",
    meal: "dessert",
    veg: true,
  },
  {
    name: "Pecan Pie",
    continent: "America",
    meal: "dessert",
    veg: true,
  },
];


Recipe.insertMany(recipes)
  .then((addedRecipes) => {
    addedRecipes.forEach((recipe) => console.log(recipe.name)); // to console.log each added name
  })
  .catch((err) => {
    console.log("Error with mongoose method", err);
  });




