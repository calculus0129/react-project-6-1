const redux = require('redux'); // import Redux from the Redux package with this syntax

// Reducer function
const counterReducer = (curState = {counter: 0}, action) => {
    return {
        counter: curState.counter + 1
    };
};

// Store Generation
const store = redux.createStore(counterReducer);

// Subscriber function Triggered when the data is changed!
const counterSubscriber = () => {
    const latestState = store.getState(); // get the latest store after update
    console.log(latestState);
};

store.subscribe(counterSubscriber);

// dispatching an action
store.dispatch({type: 'increment'}); // type must be a different string.

