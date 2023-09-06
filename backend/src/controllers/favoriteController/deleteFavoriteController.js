const FavoriteManager = require('../../models/FavoriteManager');

async function deleteFavoriteController(req, res) {
    const {status, message} = await FavoriteManager.deleteFavorite(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = deleteFavoriteController;