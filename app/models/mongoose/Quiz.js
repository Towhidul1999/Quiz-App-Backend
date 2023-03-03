const mongoose = require('mongoose');

// fields definition
const fields = {
    question : {
        type : String,
        // required: 'Question is required'
    },
    createdBy: {
        type: String
    }

}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true})

// wrap schema with mongoose model
const model = mongoose.model('Quiz', schema);

module.exports = model;