const mongoose = require('mongoose');

// fields definition
const fields = {
    participateduser : {
        type : String,
    },
    answer: {
        type: String,
    }
}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true});

// wrap schema with mongoose model
const model = mongoose.model('AdminDashboard', schema);

module.exports = model;