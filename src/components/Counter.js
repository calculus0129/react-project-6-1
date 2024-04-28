import classes from './Counter.module.css';
import { actions } from '../store/index';

// When you decide to use functional component:
// /*
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter.count);
  const show = useSelector(state => state.show.showCounter);

  const incrementHandler = (amt) => {
    dispatch(actions.counterAct.increment(amt)); // {type: unique_identifier, payload: amt}
  };
  const decrementHandler = () => {
    dispatch(actions.counterAct.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(actions.showCounterAct.toggleCount());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler()}>increment</button>
        <button onClick={() => incrementHandler(10)}>increment by 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter; 

// */

// When you decide to use class-based component:
/*

import { connect } from 'react-redux';
import { Component } from 'react';

class Counter extends Component {
  //constructor() => {} // Initialize state here if needed.

  incrementHandler(amt) {
    this.props.increment(amt);
  }
  // decrementHandler() {}
  toggleCounterHandler() {
    this.props.toggle();
  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.show && <div className={classes.value}>{this.props.propCounter}</div>}
        <div>
          <button onClick={() => this.incrementHandler.bind(this)()}>increment</button>
          <button onClick={() => this.incrementHandler.bind(this)(10)}>increase by 10</button>
          <button onClick={this.props.decrement}>decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    propCounter: state.counter,
    show: state.showCounter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: (amt) => dispatch({type: "increment", amount: amt}),
    decrement: () => dispatch({type: "decrement"}),
    toggle: () => dispatch({type: 'toggle'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// */