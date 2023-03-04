const Quiz = require('../models/mongoose/Quiz');
const QuizOption = require('../models/mongoose/QuizOption');
const { db } = require('../helpers');

async function list () {
    const question =  await Quiz.find();
    const option = await QuizOption.find({},{correct:0});
    
    const quiz = [];
    
    for (let i = 0; i < question.length || i < option.length; i++) {
      if (i < question.length) {
        quiz.push(question[i]);
      }
      if (i < option.length) {
        quiz.push(option[i]);
      }
    }
    
    return {
        quiz
    }
}



module.exports = {
    list
}