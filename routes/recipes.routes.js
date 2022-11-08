const express = require('express')
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()
const app = require('../app')

      
router.get('/home-food-buddies', async (req, res, next) => {

  try {
    const selectedRecipes = await Recipe.find({continent: req.query.continent, meal: req.query.meal})
  
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


router.get('/delete-recipe/:recipeId', async(req, res, next) => {
  const { recipeId } = req.params 
  const userId = req.session.user._id

   try {
    await
    User.findByIdAndUpdate(userId, {$pull:{likedRecipes: recipeId}})
  
  res.redirect('/auth/profile')
 }
    catch(err) {console.log(err)};
});






module.exports = router;