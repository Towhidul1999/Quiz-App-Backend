const SuperAdmin = require('../models/mongoose/SuperAdmin');
const SuperAdminAuthSessionService = lulu.use('app/services/SuperAdminAuthSessionService');
const { db } = require('../helpers');

async function login (data) {
    console.log("Login:", data)


    const superAdmin = await superAdminLogin(data.email, data.password)
    
    console.log(superAdmin)
    
    if (superAdmin) {
        const session = await SuperAdminAuthSessionService.makeSession(data.email);
        return {
            superAdminEmail: data.email,
            token: session.token
        };
    }

    
};

async function superAdminLogin(email, password){
    console.log("superf:", email, password)
    return await SuperAdmin.findOne({email: email, password: password});
}

module.exports = {
    login
}





    

module.exports = {
    login
}