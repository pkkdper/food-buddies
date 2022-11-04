const express = require('express')
const User = require('../models/User.model')
const router = express.Router()
const bcrypt = require('bcryptjs')
const app = require('../app')


// setting signup route
router.get('/signup', (req, res) => {
  res.render('auth/signup')
})


// setting POST signup route
router.post("/signup", async (req, res) => {
  try {
    console.log("The form data: ", req.body);
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    await User.create({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });
    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    res.render('user/profile', { errorMessage: error.message, isConnected: false })
  }
});

  // setting login route
  router.get('/login', (req, res) => {
    res.render('auth/login')
  })
  module.exports = router;

  // setting POST login route

  


// setting profile route
router.get('/profile', (req, res) => {
    res.render('user/profile')
})


// setting logout route

module.exports = router;