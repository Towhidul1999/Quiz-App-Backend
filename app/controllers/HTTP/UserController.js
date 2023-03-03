const Handler = lulu.use('app/errors/Handler');
const UserService = lulu.use('app/services/UserService');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    register : async function (req, res) {
        try{
            const newUser = await UserService.createUserByRole("User",{
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            return response.dispatch("User Created Successfully", {newUser}, res, 201); // wrap data in object to avoid confusion
        }
        catch(error){
            return response.error(Handler(error), res);
        }
    },
    login : async function (req, res) {
        try{
            const loginData = await UserService.login(req.body);
            console.log("User Login:", loginData)
            return response.dispatch("User Logged In Successfully", {loginData}, res, 200);
        }
        catch(error){
            return response.error(Handler(error), res);
        }
    }
}