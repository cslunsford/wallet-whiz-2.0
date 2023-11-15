const { Schema } = require('mongoose');

const transactionSchema = new Schema({
    account_id: {
        type: String,
    },
    amount: {
        type: Number,
    },
    merchantName: {
        type: String,
    },
    date: {
        type: String,
    },
    category: {
        type: String,
    }
});

module.exports = transactionSchema;