const likesDB = require('../models/likesDB');
console.log('controller is running')
module.exports = {

  addlike(req,res,next) {
    console.log('this is req body', req.body)
    likesDB.create(req.body)
      .then((user) => {
        // res.locals.justAdded = user
        res.json({
          message: 'user has been added',
          userData: user
        })
      })
      .catch(err => {
        next(err)
      })
    console.log('req.body of your form that you added',req.body)
  },
  check(req, res, next){
    console.log(`I am in the controller, checking for matches`, req.body)
    likesDB.checkForMatch(req.body)
    .then(result => {
      console.log(`this is the result in the controller`, result)
      res.json({
        message: 'You got a match',
        data: result
      })
    })
    .catch(err => {
      console.log(`Ryan fucked up in the back end`, err)
    })
  }

}
