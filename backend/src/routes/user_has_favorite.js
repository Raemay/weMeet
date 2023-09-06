const express = require('express');
const router = express.Router();
const createUserFavoriteController = require('../controllers/UserFavoriteController/createUserFavoriteController');
const readUserFavoriteController = require("../controllers/UserFavoriteController/readUserFavoriteController")
const readOneUserFavoriteController = require("../controllers/UserFavoriteController/readOneUserFavoriteController");
const deleteUserFavoriteController = require('../controllers/UserFavoriteController/deleteUserFavoriteController');
/* POST : create a new UserFavorite. */
router.post('/', createUserFavoriteController)

/* GET : fetch all UserFavorites . */
router.get('/', readUserFavoriteController)

/* GET : fetch one UserFavorite . */
router.get('/:userid/:favoriteid', readOneUserFavoriteController)

/* DELETE : delete one UserFavorite . */
router.delete('/:userid/:favoriteid', deleteUserFavoriteController)

module.exports = router;