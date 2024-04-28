// Import redux from the Redux package
import {createStore} from 'redux';

// const redux = require("redux");

const reducer = (curState = {counter: 0}, action) => {
    let state = Object.create(curState); // deep-copy an object
    if(action.type === 'increment') {
        state.counter -= 1;
    }
    if(action.type === 'decrement') {
        state.counter += 1;
    }
    return state;
};

const store = createStore(reducer);

export default store;