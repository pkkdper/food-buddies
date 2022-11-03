const express = require('express')
const User = require('../models/User.model')
const router = express.Router()
const bcrypt = require('bcryptjs')
const app = require('../app')


// setting signup route
router.get('/signup', (req, res) => {
  res.render('auth/signup')
})