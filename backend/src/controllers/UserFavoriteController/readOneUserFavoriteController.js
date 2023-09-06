const UserFavoriteManager = require('../../models/UserFavoriteManager');

async function readOneUserFavoriteController(req, res) {
    const {status, message} = await UserFavoriteManager.fetchOneUserFavorite(req.params.userid, req.params.favoriteid);
    
    return res.status(status).json(message)
}

module.exports = readOneUserFavoriteController;