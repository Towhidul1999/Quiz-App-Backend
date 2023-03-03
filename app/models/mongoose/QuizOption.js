const mongoose = require('mongoose');

// fields definition
const fields = {
    option1 : {
        type : String,
        // required: 'Option is required'
    },
    option2 : {
        type : String,
        // required: 'Option is required'
    },
    correct: {
        type: String,
        // required: 'Correct is required'
    }
}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true})

// wrap schema with mongoose model
const model = mongoose.model('QuizOption', schema);

module.exports = model;