const UserManager = require('../../models/userManager');

async function updateUserController(req, res) {
    const {status, message} = await UserManager.updateUser(req.params.id, req.body);
    
    return res.status(status).json(message)
}

module.exports = updateUserController;