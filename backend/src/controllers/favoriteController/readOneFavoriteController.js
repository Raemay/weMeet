const FavoriteManager = require('../../models/FavoriteManager');

async function readOneFavoriteController(req, res) {
    const {status, message} = await FavoriteManager.fetchOneFavorite(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = readOneFavoriteController;