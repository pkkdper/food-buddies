const express = require('express')
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()
const app = require('../app')

      
router.get('/home-food-buddies', async (req, res, next) => {
  console.log(req.query)
  try {
  
    const selectedRecipes = await Recipe.find({continent: req.query.continent, meal: req.query.meal})
    console.log(selectedRecipes)
    res.render('home-food-buddies')
  } 
  catch (err) {
    console.log(err)
  }
})






module.exports = router;