import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './style/main.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Couldn't find root element");
}
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
