const mongoose = require('mongoose');

// fields definition
const fields = {
    email : {
        type : String,
        required: 'Email is required'
    },
    password: {
        type: String,
    },
    code: {
        type: String,
        required: 'Secret Code Is Required'
    }

}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true})

// wrap schema with mongoose model
const model = mongoose.model('CreateAdmin', schema);

module.exports = model;