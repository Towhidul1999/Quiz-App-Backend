const CreateAdmin = lulu.use('app/models/mongoose/CreateAdmin');
const slugify = require('slugify');
const NotFoundError = lulu.use('app/errors/NotFoundError');
const Comment = lulu.use('app/models/mongoose/CreateAdmin');
const shortid = require('shortid');

module.exports = {
    create: async function (data) {
        const code = shortid();
        console.log("admincreatedata", data)
        const newdAdmin = new CreateAdmin({
            email: data.email,
            password: data.password,
            code: code
        });
        await newdAdmin.save();
        return newdAdmin;
    }
}