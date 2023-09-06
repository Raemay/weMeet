const UserFavoriteManager = require("../../models/UserFavoriteManager");

async function readUserFavoriteController(req, res) {
    const {status, message} = await UserFavoriteManager.getAllUserFavorite();
    
    return res.status(status).json(message)
}

module.exports = readUserFavoriteController;