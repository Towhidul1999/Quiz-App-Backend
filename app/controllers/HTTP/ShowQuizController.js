const Handler = lulu.use('app/errors/Handler');
// const ShowQuizService = lulu.use('app/services/ShowQuizService');
const ShowQuizService = require('../../services/ShowQuizService');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    show : async function (req, res) {
        try{
            const quiz = await ShowQuizService.list();
            // console.log("logindata:",quiz)
            return response.dispatch("Quiz Fetched Successfully", {quiz}, res, 200);
        }
        catch(error){
            return response.error(Handler(error), res);
        }
    }
}