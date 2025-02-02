import { createSlice } from "@reduxjs/toolkit";
import type { CountState } from "./types";

const initialState: CountState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    // increment(state) {
    //   state.count++;
    // },
    // decrement(state) {
    //   state.count++;
    // },
    increase(state, action) {
      state.count += action.payload;
    },
    decrease(state, action) {
      state.count -= action.payload;
    },
  },
});

export default countSlice;
