const Handler = lulu.use('app/errors/Handler');
const response = lulu.use('app/responses/Response');
// const AuthSessionService = lulu.use('app/services/AuthSessionService');
const SuperAdminAuthSessionService = require('../services/SuperAdminAuthSessionService');
const AuthenticationError = lulu.use('app/errors/AuthenticationError');

module.exports = async function (req, res, next) {
    try {
        if(!await SuperAdminAuthSessionService.checkSession(req.headers.__user, req.headers.__session)){
            throw new AuthenticationError('You are not Super Admin.');
        }
        next();
    }
    catch (error) { 
        return response.error(Handler(error), res);
    }

}