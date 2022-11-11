const express = require('express')
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()
const app = require('../app')

      
router.get('/home-food-buddies', async (req, res, next) => {

  try {
    const currentUser = await User.findById(req.session.user._id).populate('likedRecipes')
console.log(currentUser)
const userLikedRecipes = currentUser.likedRecipes
    const selectedRecipes = await Recipe.find({continent: req.query.continent, meal: req.query.meal}) 
 const remainingRecipes = []
 for (i=0; i<userLikedRecipes.length; i++) {
  for (j=0; j<selectedRecipes.length; j++) {
    console.log(selectedRecipes[j].name, userLikedRecipes[i].name)
if (selectedRecipes[j].name !== userLikedRecipes[i].name) {
  remainingRecipes.push(selectedRecipes[j])
}
  }
 }
   
    console.log("remaining", remainingRecipes)
    res.render('home-food-buddies', {selectedRecipes:remainingRecipes})  
  } 
  catch (err) {
  console.log(err)
  }
});

// adding liked Recipe into profile route
      
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
});

// Updating recipe on user profile route

router.get('/update-recipe/:recipeId', async(req, res) =>{
  console.log(req.params)
  const findRecipe = await Recipe.findById(req.params.recipeId)
  console.log(findRecipe)
  try {
    res.render('user/user-updated', {findRecipe})
  }
  catch(err) {
  console.log(err)
 }
});

router.post('/update-recipe/:recipeId', async(req, res, next) => {
  const { name, continent , meal, info } = req.body
  //const userId = req.session.user._id
  //console.log(userId)

 try {
 const updateRecipes = await Recipe.findByIdAndUpdate(req.params.recipeId,{name:req.body.name, continent:req.body.continent, meal:req.body.meal, info:req.body.info})
  res.redirect('/auth/profile')
}
  catch(err) {console.log(err)};
});

// deleting recipe route

router.get('/delete-recipe/:recipeId', async(req, res, next) => {
  const { recipeId } = req.params 
  const userId = req.session.user._id

   try {
    await User.findByIdAndUpdate(userId, {$pull:{likedRecipes: recipeId}}) 
    res.redirect('/auth/profile')
 }
    catch(err) {console.log(err)};
});

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