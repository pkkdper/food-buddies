const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')

module.exports = app => {
  app.set('trust proxy', 1)
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 60000*60*24*7, 
      },
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI || 'mongodb://127.0.0.1/food-buddies',

      }),
    })
  )
  // middle ware for making the user available to all templates
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});
}
