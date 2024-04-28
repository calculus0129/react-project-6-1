// Import redux from the Redux package
import {createStore} from 'redux';

// const redux = require("redux");

const reducer = (curState = {counter: 0, showCounter: true}, action) => {
    let state = Object.create(curState); // deep-copy an object
    const amount = ((action.amount !== undefined)?action.amount:1);
    if(action.type === 'increment') {
        state.counter += amount;
    }
    if(action.type === 'decrement') {
        state.counter -= amount;
    }
    if(action.type === 'toggle') {
        state.showCounter = !curState.showCounter;
    }
    return state;
};

const store = createStore(reducer);

export default store;