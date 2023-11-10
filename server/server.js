require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware
    }));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    db.once('open', () => {
        app.listen(PORT, () => console.log(`Now listenting on localhost:${PORT}`));
    });
};

// // Import Plaid SDK https://www.npmjs.com/package/plaid //
// const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
// // Import Plaid credentials from .env file
// const PLAIDCLIENT_ID = process.env.PLAIDCLIENT_ID;
// const PLAIDSECRET = process.env.PLAIDSECRET;
// // Create a new instance of the Plaid client
// let accessToken;

// // Initialize the Plaid client
// const configuration = new Configuration({
//     basePath: PlaidEnvironments.sandbox,
//     baseOptions: {
//         headers: {
//             'PLAID-CLIENT-ID': PLAIDCLIENT_ID,
//             'PLAID-SECRET': PLAIDSECRET,
//         },
//     },
//   });
//   //this has to come after the configuration / plaid client init
//   const plaidClient = new PlaidApi(configuration);
//   const { TransactionsSyncRequest } = require('plaid');
//   let linkToken; //declare a variable to store the link token to export it to another file

//   //PLAID Create a new link_token -- Step 1
// app.post('/create_link_token', async function (request, response) {
//     const plaidRequest = {
//         user: {
//             client_user_id: 'user',
//         },
//         client_name: 'Plaid Test App',
//         products: ['auth'],
//         language: 'en',
//         redirect_uri: 'http://localhost:3000/',
//         country_codes: ['US'],
//     };
//     try {
//         const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
//         response.json(createTokenResponse.data);
        
//     } catch (error) {
//       console.error('Error:', error.message);
//         response.status(500).send("failure");
//         console.error('Plaid API Error:', error.response ? error.response.data : error.message);
//         // handle error
//     }
//   });

//   //PLAID Exchange public_token for access_token -- Step 2
// app.post('/exchange_public_token', async function (
//     request,
//     response,
//     next,
//   ) {
//     const publicToken = request.body.public_token;
//     console.log(request.body);
//     try {
//         const plaidResponse = await plaidClient.itemPublicTokenExchange({
//             public_token: publicToken,
//         });
//         // These values should be saved to a persistent database and
  
//         const accessToken = plaidResponse.data.access_token;
//         const user = await User.findByPk(request.session.user_id);
  
//         user.access_token = accessToken;
//         await user.save({ fields: ["access_token"] });
  
//         console.log('Miracle_access_token:', accessToken);
//         response.json({ accessToken });
//     } catch (error) {
//         response.status(500).send("failed");
//     }
//   });

//   // PLAID Pull bank accounts -- Step 3
// app.get('/accounts', async function (request, response, next) {
//     try {
//       const user = await User.findByPk(request.session.user_id);
      
//       console.log(user.access_token)
//       const accountsResponse = await plaidClient.accountsGet({
//         access_token: user.access_token,
      
//       });
//       prettyPrintResponse(accountsResponse);
//       response.json(accountsResponse.data);
//     } catch (error) {
//       console.error('Error:', error.message);
//         response.status(500).send("failure");
//         console.error('Plaid API Error:', error.response ? error.response.data : error.message);
//     }
//   });
//   function prettyPrintResponse(data) {
//     // Implement the function logic here
//     console.log(data); // log the data to the console
// }


// async function fetchData() {
//     try {
//       const response = await axios.post('http://localhost:3000/create_link_token');
//       console.log('Response:', response.data);
//       linkToken = response.data.link_token; // Extract link_token to variable linkToken
//       console.log("Link Token in server.js:", linkToken);
      
//      } catch (error) {
//       console.error('Error:', error.message);
//     }
//   }



startApolloServer();