const SuperAdminAuth = lulu.use('app/models/mongoose/SuperAdminAuth');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    makeSession: async (superAdminEmail) => {
        const token = uuidv4();
        let newSession = new SuperAdminAuth({
            superAdminEmail,
            token
        });
        return await newSession.save();
    },
    checkSession: async (superAdminEmail, token) => {
        return await SuperAdminAuth.findOne({superAdminEmail, token, isExpired: false});
    }
}