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
    res.render('home-food-buddies', {selectedRecipes})
    
  } 
  catch (err) {
    console.log(err)
  }
})

      
router.get('/add-recipe/:recipeId', async (req, res, next) => {
  const { recipeId } = req.params
  const userId = req.session.user._id

  try {
   await User.findByIdAndUpdate(userId, {$push:{likedRecipes: recipeId}})
   res.redirect('/auth/profile')
  } 
  catch (err) {
    console.log(err)
  }
})









module.exports = router;