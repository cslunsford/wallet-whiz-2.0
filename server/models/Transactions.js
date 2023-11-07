const { Schema } = require('mongoose');

const transactionSchema = new Schema({
    amount: {
        type: Number,
    },
    merchantName: {
        type: String,
    },
    date: {
        type: Date,
    },
});

module.exports = transactionSchema;