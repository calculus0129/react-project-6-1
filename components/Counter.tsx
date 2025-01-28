import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import type { State } from "@/store";

const Counter = () => {
  const counter = useSelector((state: State) => state.count);

  const dispatch = useDispatch();
  const counterHandler = (type: string) => {
    return () => dispatch({ type });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={counterHandler("INCREMENT")}>Increment</button>
        <button onClick={counterHandler("DECREMENT")}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
