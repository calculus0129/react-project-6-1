import { createStore } from "redux";

export type State = {
  count: number;
};

export type Action = {
  type: string;
  payload?: number;
};

const initialState: State = {
  count: 0,
};

// (state?.count ?? 0)
const countReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

export default store;
