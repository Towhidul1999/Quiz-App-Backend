const Quiz = require('../models/mongoose/Quiz');
const QuizOption = require('../models/mongoose/QuizOption');
const NotFoundError = lulu.use('app/errors/NotFoundError');
// const Comment = lulu.use('app/models/mongoose/Quiz');

module.exports = {
    create: async function (data) {

        console.log("Service:", data)

        const newQuiz = new Quiz({
            question: data.question,
            createdBy: data.createdBy,
        });

        const newOption = new QuizOption({
            option1: data.option1,
            option2: data.option2,
            correct: data.correct,
        });

        await newQuiz.save();
        await newOption.save();
        return newQuiz;
    }
}