// client.js
const React = require('react');
const { hydrate } = require('react-dom');
const { Provider } = require('react-redux');
const App = require('../src/App').App;
const configureStore = require('../src/configureStore');

// Get the initial state of the application
const initialState = window.__INITIAL_STATE__;

// Create the Redux store with the initial state
const store = configureStore(initialState);

// Hydrate the client-side application
hydrate(
  React.createElement(Provider, { store: store },
    React.createElement(App, null)
  ),
  document.getElementById('root')
);
