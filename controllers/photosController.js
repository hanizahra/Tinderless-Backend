const photosDB = require('../models/photosDB');
console.log('controller is running')
module.exports = {

  createPhoto(req,res,next) {
    console.log('this is req body', req.body)
    photosDB.create(req.body)
      .then((photo) => {
        res.locals.justAdded = photo
        res.json({
          message: 'photo has been added',
          photoData: res.locals.justAdded
        })
      })
      .catch(err => {
        next(err)
      })
    console.log('req.body of your form that you added',req.body)
  }

}
