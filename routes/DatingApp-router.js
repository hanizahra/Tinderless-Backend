const router = require('express').Router();
const usersController = require('../controllers/usersController');

console.log('router is running')
router.post('/', usersController.create);

module.exports = router;
