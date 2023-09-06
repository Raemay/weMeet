const UserFavoriteManager = require('../../models/UserFavoriteManager');

async function createUserFavoriteController(req, res) {
    const {status, message} = await UserFavoriteManager.insertUserFavorite(req.body.user_iduser, req.body.favorite_idfavorite);
    
    return res.status(status).json(message)
}

module.exports = createUserFavoriteController;