// Import redux from the Redux package
// import {createStore, combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {count: 0};
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            const amount = ((action.payload !== undefined)?action.payload:1);
            state.count += amount;
        },
        decrement(state) {
            --state.count;
        },
    }
});

const showCounterSlice = createSlice({
    name: 'showCounter',
    initialState: {showCounter: true},
    reducers: {
        toggleCount(state) {
            state.showCounter = !state.showCounter;
        }
    },
});

const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        show: showCounterSlice.reducer,
        auth: authSlice.reducer,
    }
}); // The reducer's attributes are called to call the states from the store.

export const actions = {
    counterAct: counterSlice.actions,
    showCounterAct: showCounterSlice.actions,
    authAct: authSlice.actions,
};

export default store;