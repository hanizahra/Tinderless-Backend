const usersDB = require('../models/usersDB');
console.log('controller is running')
module.exports = {

  create(req,res,next) {
    console.log('this is req body', req.body)
    usersDB.create(req.body)
      .then((user) => {
        res.locals.justAdded = user
        res.json({
          message: 'user has been added',
          userData: res.locals.justAdded
        })
      })
      .catch(err => {
        next(err)
      })
    console.log('req.body of your form that you added',req.body)
  },

  showOne(req,res,next) {
    usersDB.showOne(req.params.id)
      .then((user) => {
        res.locals.user = user
        res.json({
          message: 'ok here is your request for this user',
          dataShowOne: res.locals
        })
      })
      .catch(err => next(err))
  },

  updateUser(req,res,next) {
    usersDB.update(req.body)
      .then((user) => {
        res.locals.userUpdated = user
        res.json({
          message: 'user updated for user controller'
        })
      })
      .catch(err => {
        next(err)
      })
    console.log('req.body of updated form',req.body)
  },

  login(req, res, next) {
    usersDB.login(req.body)
    .then((user) => {
      res.locals.userLogin = user
      res.json({
        message: 'user is logging in',
        user: res.locals.userLogin
      })
    })
    .catch(err => {
      next(err)
    })
    console.log('logging in with credentials: ', req.body);
  }

}
