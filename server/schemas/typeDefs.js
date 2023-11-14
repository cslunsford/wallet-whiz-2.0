const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        plaidAccessToken: String
        accounts: [Account]
        transactions: [Transaction]
    }

    type Account {
        _id: ID
        account_id: String
        accountName: String
        balance: Float
    }

    type Transaction {
        _id: ID
        account_id: String
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
        register(username: String!, email: String!, password: String!): Auth
        updateUsername(userId: ID!, username: String!): User
        updateEmail(userId: ID!, email: String!): User
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