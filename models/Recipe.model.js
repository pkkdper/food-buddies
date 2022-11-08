// const mongoose = require("mongoose");
const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    continent: {
      type: String,
      required: true,
      enum: ["America", "Africa", "Asia", "Europe"]
    },
    meal: {
      type: String,
      required: true,
      enum: ["breakfast", "lunch", "dinner", "dessert"]
    },
    veg: {
        type:Boolean,
        required:true
    },
    image: {
        type: String
    }
  },
)

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe