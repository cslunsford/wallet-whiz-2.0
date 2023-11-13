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
    mutation register($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
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