const QuizOption = require('../models/mongoose/QuizOption');
const AuthSessionService = lulu.use('app/services/AuthSessionService');
const { db } = require('../helpers');
const AdminDashboard = require('../models/mongoose/AdminDashoard');

async function check (data) {
    console.log("Login service:", data)
    
    const answer = await CorrectQuiz(data.correct)
    
    console.log("this is answer",data.id);

    const dashboard = new AdminDashboard({
        participateduser: data.id,
        answer: data.correct
    })
    await dashboard.save();

    if (answer) {
        const session = await AuthSessionService.makeSession(data.id);
        return {
            userId: data.id,
            correct: data.correct,
            token: session.token
        };
    }else{
        return "Wrong Answer";
    }
};

async function CorrectQuiz(correct){
    console.log("adminsevice:", correct)
    return await QuizOption.findOne({correct: correct});
}

module.exports = {
    check
}