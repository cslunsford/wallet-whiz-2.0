import React from 'react';
import './App.css';
import Navbar from './components/nav';
import plaidApp from './components/plaid';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { PageTheme } from './components/PageTheme';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStoragel.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={PageTheme}>
      <Navbar />
      <Outlet />
      <plaidApp />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
