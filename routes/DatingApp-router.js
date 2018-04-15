const router = require('express').Router();
const usersController = require('../controllers/usersController');
const photosController = require('../controllers/photosController');

console.log('router is running ')
router.post('/', usersController.create);
router.post('/addphoto', photosController.createPhoto);

module.exports = router;
