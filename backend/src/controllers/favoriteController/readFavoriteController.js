const FavoriteManager = require('../../models/FavoriteManager');

async function readFavoriteController(req, res) {
    const {status, message} = await FavoriteManager.getAllFavorite();
    
    return res.status(status).json(message)
}

module.exports = readFavoriteController;