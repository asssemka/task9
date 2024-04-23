const { createStore } = require('redux');

// Define your initial state and root reducer here
const initialState = {}; // Define your initial state as needed
const rootReducer = (state = initialState, action) => {
  // Handle your actions here
  return state;
};

// Create the Redux store
const store = createStore(rootReducer);

module.exports = store;
