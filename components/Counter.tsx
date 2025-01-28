"use client";

import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import type { State } from "@/store";

import { useState } from "react";

const Counter = () => {
  const [showCounter, setShowCounter] = useState(true);
  const counter = useSelector((state: State) => state.count);

  const dispatch = useDispatch();
  const counterHandler = (type: string, amount: number = 1) => {
    return () => dispatch({ type, amount });
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
          <button onClick={counterHandler("INCREMENT", 5)}>+5</button>
          <button onClick={counterHandler("INCREMENT")}>+1</button>
          <button onClick={counterHandler("DECREMENT")}>-1</button>
          <button onClick={counterHandler("DECREMENT", 5)}>-5</button>
        </div>
      ) : (
        <h3>hehe</h3>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
