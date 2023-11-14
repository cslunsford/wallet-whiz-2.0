import { gql } from '@apollo/client';

export const USER = gql`
    query user {
        user {
            _id
            email
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