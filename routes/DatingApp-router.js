const router = require('express').Router();
const usersController = require('../controllers/usersController');
const photosController = require('../controllers/photosController');
const locationsController = require('../controllers/locationsController');

console.log('router is running ')
router.post('/', usersController.create);
router.post('/location', locationsController.create);
router.post('/addphoto', photosController.createPhoto);
router.get('/:id', usersController.showOne);
router.get('/addphoto/:id', photosController.showOne);
router.post('/login', usersController.login);
router.patch('/:id', usersController.updateUser);

module.exports = router;
