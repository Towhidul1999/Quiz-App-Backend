const Handler = lulu.use('app/errors/Handler');
const ParticipateQuizSevice = require('../../services/ParticipateQuizSevice')
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    participate : async function (req, res) {
        try{
            console.log("meow controller",req.params.id);

            const quizData = await ParticipateQuizSevice.check({
                id: req.params.id,
                correct: req.body.correct,
                question: req.body.question
            });

            Event.emit(`notify/participate-quiz`, quizData);

            return response.dispatch("Quiz Participated Successfully", {quizData}, res, 200);

        }
        catch(error){
            return response.error(Handler(error), res);
        }
    }
}