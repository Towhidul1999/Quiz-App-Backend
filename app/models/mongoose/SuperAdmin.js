const mongoose = require('mongoose');

// fields definition
const fields = {
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        select: false
    }
}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true})

// wrap schema with mongoose model
const model = mongoose.model('SuperAdmin', schema);

module.exports = model;