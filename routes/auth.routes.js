const express = require('express')
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()
const bcrypt = require('bcryptjs')
const app = require('../app')
const { isLoggedOut } = require('../middlewares/middlewares')
const { isLoggedIn } = require('../middlewares/middlewares')


// setting signup route
router.get('/signup', isLoggedOut, (req, res) => {
  res.render('auth/signup')
})


// setting POST signup route
router.post("/signup", isLoggedOut, async (req, res) => {
  try {
    console.log("The form data: ", req.body);
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    await User.create({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });
    res.redirect("/auth/login");
  } catch (error) {
    console.log(error);
    res.render('auth/signup', { errorMessage: error.message})
  }
});

  // setting login route
  router.get('/login', 
  
  isLoggedOut,
  
  (req, res) => {
    res.render('auth/login')
  })

  // setting POST login route

  router.post('/login', isLoggedOut, async (req, res) => {
    console.log("here", req.body)
    const { username, password } = req.body

    const currentUser = await User.findOne({ username })
    if (!currentUser) {
      res.render('auth/login', { errorMessage: 'No user with this username'})
    } else {
      if (bcrypt.compareSync(password, currentUser.password)) {
        console.log('Correct password')
        req.session.user = currentUser
        res.redirect('/auth/profile')
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password'})
      }
    }
  })

// setting profile route
router.get('/profile', isLoggedIn, async(req, res) => {
  console.log(req.session)
  try {
    const loginUser = await User.findById(req.session.user._id).populate('likedRecipes')
    console.log(loginUser)
    res.render('user/profile', {loginUser})
  }
  catch (error) {
    console.log(error);
  }
});

// setting logout route
router.get('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.redirect('/auth/login')
  })
})

// setting food home route
router.get('/home-food-buddies', isLoggedIn, (req, res) => {
  console.log(req.session)
    res.render('home-food-buddies')
})

module.exports = router;

