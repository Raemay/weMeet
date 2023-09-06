const UserFavoriteManager = require('../../models/UserFavoriteManager');

async function deleteUserFavoriteController(req, res) {
    const userId = req.params.userid;
    const favoriteId = req.params.favoriteid;

    const { status, message } = await UserFavoriteManager.deleteUserFavorite(userId, favoriteId);

    return res.status(status).json(message);
}

module.exports = deleteUserFavoriteController;
