const usersDB = require('../models/usersDB');
module.exports = {

  create(req,res,next) {
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
  }

}
