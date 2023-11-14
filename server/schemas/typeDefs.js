const typeDefs = `
    type User {
        _id: ID
        email: String
        plaidAccessToken: String
        accounts: [Account]
        transactions: [Transaction]
    }

    type Account {
        _id: ID
        accountName: String
        balance: Float
    }

    type Transaction {
        _id: ID
        amount: Float
        merchantName: String
        date: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        accounts: [Account]
        transactions: [Transaction]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        register(email: String!, password: String!): Auth
        exchangePublicToken(publicToken: String!): AccessToken
        fetchPlaidData(accessToken: String!): PlaidDataResult
    }

    type AccessToken {
        access_token: String
    }

    type PlaidDataResult {
        savedAccounts: [Account]
        savedTransactions: [Transaction]
    }
`;

module.exports = typeDefs;