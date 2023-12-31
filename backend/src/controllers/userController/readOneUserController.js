const UserManager = require('../../models/userManager');

async function readOneUserController(req, res) {
    const {status, message} = await UserManager.fetchOneUser(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = readOneUserController;