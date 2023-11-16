import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String! $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const REGISTER = gql`
    mutation register($username: String!, $email: String!, $password: String!) {
        register(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const UPDATE_USERNAME = gql`
    mutation updateUsername($userId: ID!, $username: String!) {
        updateUsername(userId: $userId, username: $username) {
            _id
            username
        }
    }
`;

export const UPDATE_EMAIL = gql`
    mutation updateEmail($userId: ID!, $email: String!) {
        updateEmail(userId: $userId, email: $email) {
            _id
            email
        }
    }
`;

export const EXCHANGE_PUBLIC_TOKEN = gql`
    mutation ExchangePublicToken($publicToken: String!) {
     exchangePublicToken(publicToken: $publicToken) {
     access_token
  }
}
`;

export const FETCH_PLAID_DATA = gql`
    mutation FetchPlaidData($accessToken: String!) {
        fetchPlaidData(accessToken: $accessToken) {
            savedAccounts {
                _id
                accountName
                balance
            }
            savedTransactions {
                _id
                amount
                merchantName
                date
                category
            }
        }
    }
`;