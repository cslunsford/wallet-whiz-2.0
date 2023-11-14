const { Schema } = require('mongoose');

const accountSchema = new Schema({
    account_id: {
        type: String,
    },
    accountName: {
        type: String,
    },
    balance: {
        type: Number,
    },
});

module.exports = accountSchema;