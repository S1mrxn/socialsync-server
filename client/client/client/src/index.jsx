import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import jwtDecode from 'jwt-decode';

// Utility to check if token is expired
const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 < Date.now(); // token expiry is in seconds
  } catch (err) {
    return true;
  }
};

// HTTP Link
const httpLink = createHttpLink({
  uri: 'https://socialsync-server-boq2.onrender.com/graphql',
});

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Path: ${path}`);
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError.message}`);
  }
});

// Auth Link 
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  // Remove expired token
  if (token && isTokenExpired(token)) {
    console.warn('Token expired. Logging out.');
    localStorage.removeItem('token');
    // Optionally redirect user to login page (in-app redirect can happen in protected route hooks)
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Create Apollo Client
const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

// Mount App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
