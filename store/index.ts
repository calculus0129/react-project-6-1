import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const actions = {
  countActions: countSlice.actions,
  authActions: authSlice.actions,
};
export default store;
export type RootState = ReturnType<typeof store.getState>;
/* type RootState = {
    count: CountState;
    auth: AuthState;
}*/
