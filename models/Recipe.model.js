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
      enum: ["breakfast", "lunch", "dessert", "dinner"]
    },
    veg: {
        type: Boolean,
        required:true
    },
    image: {
        type: String
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);


const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe