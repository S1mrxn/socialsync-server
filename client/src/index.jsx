import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  link: httpLink,
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
