const Handler = lulu.use('app/errors/Handler');
const AdminLoginService = lulu.use('app/services/AdminLoginService');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    login : async function (req, res) {
        try{
            console.log("meow controller",req.body);
            const loginData = await AdminLoginService.login(req.body);
            console.log("loginData:",loginData);
            Event.emit(`notify/admin-loggedIn`, loginData);
            return response.dispatch("Admin Logged In Successfully", {loginData}, res, 200);

        }
        catch(error){
            return response.error(Handler(error), res);
        }
    }
}