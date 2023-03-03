const CreateQuizService = require('../../services/CreateQuizService');
const Handler = lulu.use('app/errors/Handler');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {
    create: async function (req, res) {
        try {
            
            const quiz = await CreateQuizService.create({
                question: req.body.question,
                createdBy: req.body.createdBy,
                option1: req.body.option1,
                option2: req.body.option2,
                correct: req.body.correct
            });

            return response.dispatch("Quiz Created Successfully", {quiz}, res, 200);
        }
        catch (error) {
            return response.error(Handler(error), res);
        }
    }
}