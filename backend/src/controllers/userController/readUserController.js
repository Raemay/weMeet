const UserManager = require('../../models/userManager');

async function readUserController(req, res) {
    console.log("coucou")
    const {status, message} = await UserManager.getAllUsers();
    
    return res.status(status).json(message)
}

module.exports = readUserController;