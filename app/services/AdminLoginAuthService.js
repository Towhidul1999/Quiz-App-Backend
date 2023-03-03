// const AdminLoginAuth = lulu.use('app/models/mongoose/AdminLoginAuth');
const AdminLoginAuth = require('../models/mongoose/AddminLoginAuth');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    makeSession: async (adminEmail) => {
        const token = uuidv4();
        let newSession = new AdminLoginAuth({
            adminEmail,
            token
        });
        return await newSession.save();
    },
    checkSession: async (adminEmail, token) => {
        return await AdminLoginAuth.findOne({adminEmail, token, isExpired: false});
    }
}