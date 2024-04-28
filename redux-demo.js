// import Redux from the Redux package with this syntax
const redux = require('redux');

// Reducer function - default state written in parameter.
const counterReducer = (curState = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: curState.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: curState.counter - 1
        };
    }
    return curState;
};

// Store Generation
// Call the reducer function once when the store is initialized.
const store = redux.createStore(counterReducer);

// Subscriber Function
const counterSubscriber = () => {
    const latestState = store.getState(); // get the latest store after update
    console.log(latestState);
};

// Triggered when the data is changed!
store.subscribe(counterSubscriber);

// Dispatching an action
store.dispatch({type: 'increment'}); // type must be a different string.
store.dispatch({type: 'decrement'});
store.dispatch({type: 'increment'});

