const Handler = lulu.use('app/errors/Handler');
const SuperAdminService = lulu.use('app/services/SuperAdminService');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    login : async function (req, res) {
        try{
            const loginData = await SuperAdminService.login(req.body);
            console.log("logindata:",loginData)
            return response.dispatch("Admin Logged In Successfully", {loginData}, res, 200);

        }
        catch(error){
            return response.error(Handler(error), res);
        }
    }
}