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