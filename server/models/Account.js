const { Schema } = require('mongoose');
const transactionSchema = require('./Transactions');

const accountSchema = new Schema({
    accountName: {
        type: String,
    },
    balance: {
        type: Number,
    },
    transactions: [transactionSchema],
});

module.exports = accountSchema;