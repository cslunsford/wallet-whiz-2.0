const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAIDCLIENT_ID,
            'PLAID-SECRET': process.env.PLAIDSECRET,
        },
    },
});

const plaidClient = new PlaidApi(configuration);

module.exports = plaidClient;