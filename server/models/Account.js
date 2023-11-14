const { Schema } = require('mongoose');

const accountSchema = new Schema({
    accountName: {
        type: String,
    },
    balance: {
        type: Number,
    },
});

module.exports = accountSchema;