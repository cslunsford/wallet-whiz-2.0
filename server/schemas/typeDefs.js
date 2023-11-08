const typeDefs = `
    type User {
        _id: ID
        email: String
        plaidAccessToken: String
        accounts: [Account]
    }

    type Account {
        _id: ID
        accountName: String
        balance: Float
        transactions: [Transaction]
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
    }
`;

module.exports = typeDefs;