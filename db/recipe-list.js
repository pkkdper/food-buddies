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
  {
    name: "Broccoli Beer Cheese Soup",
    continent: "America",
    meal: "lunch",
    veg: true,
  },
  {
    name: "Tangier Island Virginia Crab Cakes",
    continent: "America",
    meal: "lunch",
    veg: false,
  },
  {
    name: "Creole Jambalaya",
    continent: "America",
    meal: "dinner",
    veg: false,
  },
  {
    name: "Potato Clam Chowder",
    continent: "America",
    meal: "lunch",
    veg: false,
  },
  {
    name: "New Orleans Beignets",
    continent: "America",
    meal: "dessert",
    veg: true,
  },
  {
    name: "Yankee Red Flannel Hash",
    continent: "America",
    meal: "dinner",
    veg: false,
  },
  {
    name: "Cocido madrileño",
    continent: "Europe",
    meal: "lunch",
    veg: false,
  },
  {
    name: "Pastéis de nata",
    continent: "Europe",
    meal: "dessert",
    veg: true,
  },
  {
    name: "Bifana",
    continent: "Europe",
    meal: "lunch",
    veg: false,
  },
  {
    name: "Sonhos",
    continent: "Europe",
    meal: "dessert",
    veg: true,
  },
  {
    name: "Pan con tomate",
    continent: "Europe",
    meal: "lunch",
    veg: true,
  },
  {
    name: "Chouquettes",
    continent: "Europe",
    meal: "dinner",
    veg: true,
  },
  {
    name: "Croque monsieur",
    continent: "Europe",
    meal: "dinner",
    veg: true,
  },
  {
    name: "Berenjenas con miel",
    continent: "Europe",
    meal: "lunch",
    veg: true,
  },
  {
    name: "Espinacas con garbanzos",
    continent: "Europe",
    meal: "lunch",
    veg: true,
  },
  {
    name: "Coda alla vaccinara",
    continent: "Europe",
    meal: "dinner",
    veg: false,
  },
  {
    name: "Gado Gado",
    continent: "Asia",
    meal: "lunch",
    veg: true,
    },
  {
      name: "Beef Bulgogi",
      continent: "Asia",
      meal: "lunch",
      veg: false,
  },
  {
        name: "Chakalaka",
        continent: "Africa",
        meal: "dinner",
        veg: false,
  },
  {
        name: "Maafe",
        continent: "Africa",
        meal: "dinner",
        veg: false,
  },
  {
        name: "Zaalouk",
        continent: "Africa",
        meal: "lunch",
        veg: false,
  }

];


Recipe.insertMany(recipes)
  .then((addedRecipes) => {
    addedRecipes.forEach((recipe) => console.log(recipe.name)); // to console.log each added name
  })
  .catch((err) => {
    console.log("Error with mongoose method", err);
  });



