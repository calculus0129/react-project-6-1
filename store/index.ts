import { createStore } from "redux";

export type State = {
  count: number;
};

export type Action = {
  type: string;
  amount?: number; // A payload. Any name can be used.
};

const initialState: State = {
  count: 0,
};

// (state?.count ?? 0)
const countReducer = (state: State = initialState, action: Action): State => {
  if (action.type === "INCREMENT" && action.amount !== undefined) {
    return { ...state, count: state.count + action.amount };
  } else if (action.type === "DECREMENT" && action.amount !== undefined) {
    return { ...state, count: state.count - action.amount };
  } else {
    return state;
  }
  // switch (action.type) {
  //   case "INCREMENT":
  //     return { ...state, count: state.count + 1 };
  //   case "DECREMENT":
  //     return { ...state, count: state.count - 1 };
  //   default:
  //     return state;
  // }
};

const store = createStore(countReducer);

export default store;
