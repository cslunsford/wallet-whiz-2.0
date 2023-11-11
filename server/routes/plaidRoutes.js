const express = require('express');
const router = express.Router();
const User = require('../models/User');
const plaidClient = require('../config/plaid');
const { authMiddleware } = require('../utils/auth');

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

router.post('/auth', async function(req, res) {
   try {
       const access_token = req.body.access_token;
       const plaidRequest = {
           access_token: access_token,
       };
       const plaidResponse = await plaidClient.authGet(plaidRequest);
       res.json(plaidResponse.data);
   } catch (err) {
       res.status(500).json(err);
   }
});

router.post('/exchange_public_token', authMiddleware, async function (
    req,
    res,
    next,
) {
    const publicToken = req.body.public_token;
    try {
        const plaidResponse = await plaidClient.itemPublicTokenExchange({
            public_token: publicToken,
        });
        const accessToken = plaidResponse.data.access_token;

        const userId = req.user._id;

        await User.findOneAndUpdate({ _id: userId }, { plaidAccessToken: accessToken });
        res.json({ accessToken });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;