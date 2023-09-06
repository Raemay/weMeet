const FavoriteManager = require('../../models/FavoriteManager');

async function createFavoriteController(req, res) {
    const {status, message} = await FavoriteManager.insertFavorite(req.body);
    
    return res.status(status).json(message)
}

module.exports = createFavoriteController;