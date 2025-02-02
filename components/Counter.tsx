"use client";

import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import type { RootState } from "@/store";
import { actions } from "@/store";

import { useState } from "react";

const Counter = () => {
  const [showCounter, setShowCounter] = useState(true);
  const counter = useSelector((state: RootState) => state.count.count);

  const dispatch = useDispatch();
  const counterHandler = (amount: number) => {
    return () =>
      // decrease just used for demonstration
      dispatch(
        amount < 0
          ? actions.countActions.decrease(-amount)
          : actions.countActions.increase(amount),
      );
  };

  const toggleCounterHandler = () => {
    setShowCounter((state) => !state);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter ? (
        <div>
          <button onClick={counterHandler(5)}>+5</button>
          <button onClick={counterHandler(1)}>+1</button>
          <button onClick={counterHandler(-1)}>-1</button>
          <button onClick={counterHandler(-5)}>-5</button>
        </div>
      ) : (
        <h3>hehe</h3>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
