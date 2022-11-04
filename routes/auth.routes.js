const express = require('express')
const User = require('../models/User.model')
const router = express.Router()
const bcrypt = require('bcryptjs')
const app = require('../app')


// setting signup route
router.get('/signup', (req, res) => {
  res.render('auth/signup', { isConnected: false })
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
    res.redirect("/auth/login");
  } catch (error) {
    console.log(error);
    res.render('auth/signup', { errorMessage: error.message})
  }
});

  // setting login route
  router.get('/login', (req, res) => {
    res.render('auth/login', { isConnected: false })
  })

  // setting POST login route

  router.post('/login', async (req, res) => {
    console.log("here", req.body)
    const { username, password } = req.body

    const currentUser = await User.findOne({ username })
    if (!currentUser) {
      res.render('auth/login', { errorMessage: 'No user with this username', isConnected: false })
    } else {
      if (bcrypt.compareSync(password, currentUser.password)) {
        console.log('Correct password')
        req.session.user = currentUser
        res.redirect('/auth/profile')
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password', isConnected: false })
      }
    }
  })

// setting profile route
router.get('/profile', (req, res) => {
  console.log(req.session)
  if (req.session.user) {
    res.render('user/profile', { user: req.session.user.username, isConnected: true })
  } else {
    res.redirect('/auth/login')
  }})

// setting logout route
router.get('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.redirect('/auth/login')
  })
})

// setting food home route
router.get('/home', (req, res) => {
  console.log(req.session)
    res.render('home')
})

module.exports = router;

