const photosDB = require('../models/photosDB');
console.log('controller is running')
module.exports = {

  createPhoto(req,res,next) {
    console.log('creating photo with this data: ', req.body)
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
  },

  showOne(req,res,next) {
    photosDB.showOne(req.params.id)
      .then((photo) => {
        res.locals.photo = photo
        res.json({
          message: 'ok here is your request for this photo',
          dataShowOne: res.locals
        })
      })
      .catch(err => next(err))
  }

}
