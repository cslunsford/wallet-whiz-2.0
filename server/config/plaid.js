const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': "654dee10072cd8001b7860a5",
            'PLAID-SECRET': "9f81120d92265cbb154e0d1e8dfef3",
        },
    },
});

const plaidClient = new PlaidApi(configuration);

module.exports = plaidClient;