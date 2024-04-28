// Import redux from the Redux package
// import {createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { counterSlice } from './counter';
import { showCounterSlice } from './counter';
import { authSlice } from './counter';


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