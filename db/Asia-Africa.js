const mongoose = require("mongoose");
const RecipesModel = require("./models/Recipe.model");

const recipe1 = {
  name: "Korean Sweet Potatoes",
  continent: "Asia",
  meal: "lunch",
  veg: true,
  };


let recipes = [
  {
  name: "General Tso's Chicken",
  continent: "Asia",
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
        continent: "Africe",
        meal: "dinner",
        veg: false,
      },
      {
        name: "Maafe",
        continent: "Africe",
        meal: "dinner",
        veg: false,
      },
      {
        name: "Zaalouk",
        continent: "Africe",
        meal: "lunch",
        veg: false,
      }
];

//async and await

async function connectToDatabase() {
  try 
  {
    await mongoose.connect("mongodb://127.0.0.1/food-buddies");
    console.log("All good, connected");
    const newRecipe = await RecipesModel.create(recipe1);
    const arrayOfRecipes = await RecipesModel.create(recipes);

  } catch (err) {
    console.log("Not all good", err);
  }
}


connectToDatabase();

module.exports = RecipesModel;
