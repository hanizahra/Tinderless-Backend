const locationsDB = require('../models/locationsDB');
console.log('controller is running')
module.exports = {

  create(req,res,next) {
    console.log('this is req body', req.body)
    locationsDB.create(req.body)
      .then((location) => {
        res.locals.justAdded = location
        res.json({
          message: 'location has been added',
          userData: res.locals.justAdded
        })
      })
      .catch(err => {
        next(err)
      })
    console.log('req.body of form',req.body)
  }


}
