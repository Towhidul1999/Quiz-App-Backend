const mongoose = require('mongoose');

// fields definition
const fields = {
    adminEmail : {
        type : String,
        required: true
    },
    token: {
        type: String,
    },
    isExpired: {
        type: Boolean,
        default: false
    }
}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true})

// wrap schema with mongoose model
const model = mongoose.model('AdminAuth', schema);

module.exports = model;