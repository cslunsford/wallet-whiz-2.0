import { gql } from '@apollo/client';

export const USER = gql`
    query user {
        user {
            _id
            username
            email
            createdAt
            plaidAccessToken
        }
    }
`;

export const ACCOUNTS = gql`
    query accounts {
        accounts {
            _id
            accountName
            balance
        }
    }
`;

export const TRANSACTIONS = gql`
    query transactions {
        transactions {
            _id
            amount
            merchantName
            date
        }
    }
`;