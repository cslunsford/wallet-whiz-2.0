const express = require('express');
const router = express.Router();
const plaidClient = require('../config/plaid.js');

router.post('/create_link_token', async function (req, res) {
    const plaidRequest = {
        user: {
            client_user_id: 'user',
        },
        client_name: 'Plaid Test App',
        products: ['auth'],
        language: 'en',
        redirect_uri: 'http://localhost:3001/api',
        country_codes: ['US'],
    };
    console.log(plaidRequest);
    try {
        const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
        res.json(createTokenResponse.data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;