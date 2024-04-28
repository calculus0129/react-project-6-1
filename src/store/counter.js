import { createSlice } from "@reduxjs/toolkit";

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

export default counterSlice;