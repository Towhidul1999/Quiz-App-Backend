const User = require('../models/mongoose/User');
const { db } = require('../helpers');
const AuthSessionService = lulu.use('app/services/AuthSessionService');
const Hash = require('../helpers/Hash');

async function create (data) {

    data.password = await Hash.make(data.password);

    let newUser = new User(data);
    
    return await newUser.save();
}

async function createUserByRole(code, data){
    console.log(code);
    if (code === "queen") {
        code = "Admin"
    }else if(code === "king"){
        code = "Super Admin"
    }else{
        code = "User"
    }

    data.code = code

    return await create(data);
    
}

async function login (data) {

    const user = await checkUserByEmailAndPassword(data.email, data.password);
    
    if(user){
        const session = await AuthSessionService.makeSession(user._id);
        return {
            userId: user._id,
            token: session.token
        };
    }

}


// async function checkUserByEmailAndPassword(email, password){
//     return await User.findOne({email: email, password: password});
// }

async function checkUserByEmailAndPassword(email, password){
    const user = await  User.findOne({email: email});
    if(user)
    {
     const isPasswordCorrect = await Hash.compare(password, user.password);
      if (isPasswordCorrect) {
        return user
      }
    }
    
}

async function list () {
    return await User.find();
}

async function details (id) {
    if(!db.isValidObjectId(id)){
        return null;
    } // return null if id is not valid ObjectId to avoid error in mongoose.
    console.log(id);
    return await User.findOne({_id: id});
}

module.exports = {
    create,
    list,
    details,
    login,
    createUserByRole
}


