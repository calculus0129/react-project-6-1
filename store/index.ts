import { createSlice, configureStore } from "@reduxjs/toolkit";

export type State = {
  count: number;
};

// export type Action = {
//   type: string;
//   amount?: number; // A payload. Any name can be used.
// };

const initialState: State = {
  count: 0,
};

const authSlice = createSlice({
  name: "login",
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

const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    auth: authSlice.reducer,
  },
});

const countActions = countSlice.actions;
const authActions = authSlice.actions;
export const actions = { countActions, authActions };
export default store;
