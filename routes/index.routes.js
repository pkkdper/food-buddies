const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  let isConnected = false
  if (req.session.user) {
    isConnected = true
  }
  res.render('index', { isConnected })
})

module.exports = router;
