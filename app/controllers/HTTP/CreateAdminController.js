// const CreateAdminService = lulu.use('app/services/CreateAdminService');
const CreateAdminService = require('../../services/CraeteAdminService');
const Handler = lulu.use('app/errors/Handler');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    create: async function (req, res) {
        try {
            const admin = await CreateAdminService.create({
                email: req.body.email,
                password: req.body.password,
            });

            console.log(admin);

            return response.dispatch("Admin Created Successfully", {admin}, res, 200);
        }
        catch (error) {
            return response.error(Handler(error), res);
        }
    }
}