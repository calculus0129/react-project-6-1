import classes from './Counter.module.css';

// When you decide to use functional component:
/*
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };
  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// */

// When you decide to use class-based component:
// /*

import { connect } from 'react-redux';
import { Component } from 'react';

class Counter extends Component {
  //constructor() => {} // Initialize state here if needed.

  incrementHandler() {
    this.props.increment();
  }
  // decrementHandler() {}
  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.propCounter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>increment</button>
          <button onClick={this.props.decrement}>decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    propCounter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: "increment"}),
    decrement: () => dispatch({type: "decrement"}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// */