import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  decrementAsync,
} from "../state/counter/counterSlice.ts";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment by 10
        </button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(decrementAsync(10))}>
          Decrement by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
