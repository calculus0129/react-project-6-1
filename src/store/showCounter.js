import { createSlice } from '@reduxjs/toolkit';

const showCounterSlice = createSlice({
    name: 'showCounter',
    initialState: {showCounter: true},
    reducers: {
        toggleCount(state) {
            state.showCounter = !state.showCounter;
        }
    },
});

export default showCounterSlice;