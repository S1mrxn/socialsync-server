import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://socialsync-server-boq2.onrender.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Looks for a token in local storage
  const token = localStorage.getItem('token');
  // Return the headers, including the Authorization header if the token exists
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
