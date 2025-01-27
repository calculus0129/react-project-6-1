const redux = require("redux"); // import redux

// run: node redux-demo.js
// The console outputs the 'console.log' to the terminal.

/**
 * 1. Create a store (with a reducer)
 * 2. Subscribe some functions to the store
 * 3. Dispatch actions
 */

/**
 *
 * @param {null | {counter: int}} state
 * @param {{type: string, payload: any}} action
 * @returns {{counter: int}}
 */

// old state + dispatched action ==> new state
// should be a pure function.
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return state; // No need to create a deep copy with structuredClone - ChatGPT
  }
}; // A reducer

const store = redux.createStore(counterReducer); // create a store
/**
 * You should not be using the redux core package by itself today, except for learning purposes.
 * The createStore method from the core redux package will not be removed,
 * but we encourage all users to migrate to using Redux Toolkit for all Redux code.
 */

// A subscriber function that prints the latest state
const counterPrinter = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe a function to the store.
// This gets executed whenever the state changes via dispatch.
store.subscribe(counterPrinter);

/**
 * Dispatching an action
 * 1. executes the reducer with the action
 * 2. updates the state
 * 3. notifies all subscribers (by executing the subscribed functions)
 */

// dispatch actions
store.dispatch({ type: "INCREMENT" }); // { counter: 1 }
store.dispatch({ type: "" }); // { counter: 1 }
store.dispatch({ type: "DECREMENT" }); // { counter: 0 }
