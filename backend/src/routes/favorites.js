const express = require('express');
const router = express.Router();
const createFavoriteController = require('../controllers/favoriteController/createFavoriteController');
const readFavoriteController = require('../controllers/favoriteController/readFavoriteController');
const readOneFavoriteController = require('../controllers/favoriteController/readOneFavoriteController');
const deleteFavoriteController = require('../controllers/favoriteController/deleteFavoriteController');

/* POST : create a new Favorite. */
router.post('/', createFavoriteController)

/* GET : fetch all Favorites . */
router.get('/', readFavoriteController)

/* GET : fetch one Favorite . */
router.get('/:id', readOneFavoriteController)

/* DELETE : delete one Favorite . */
router.delete('/:id', deleteFavoriteController)

module.exports = router;