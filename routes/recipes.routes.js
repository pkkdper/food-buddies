const express = require('express')
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()
const app = require('../app')


router.get('/profile', async (req, res, next) => {
  try {
    const selectedRecipes = await Recipe.find({ name: recipe.name})
    res.render('selected-recipes', { recipes })
  } catch (err) {
    console.log(err)
  }
})






module.exports = router;