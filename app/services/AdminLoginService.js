const CreateAdmin = require('../models/mongoose/CreateAdmin');
const AdminLoginAuthService = lulu.use('app/services/AdminLoginAuthService');
const { db } = require('../helpers');

async function login (data) {
    console.log("Login service:", data)
    
    const admin = await AdminLogin(data.email, data.password)
    
    console.log("this is service null",admin)
    
    if (admin) {
        const session = await AdminLoginAuthService.makeSession(data.email);
        return {
            adminEmail: data.email,
            token: session.token
        };
    }

    
};

async function AdminLogin(email, password){
    console.log("adminsevice:", email, password)
    return await CreateAdmin.findOne({email: email, password: password});
}

module.exports = {
    login
}