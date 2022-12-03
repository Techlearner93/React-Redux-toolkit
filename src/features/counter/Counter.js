import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [varAmount, setVarAmount] = useState(0);
  const addValue = Number(varAmount) || 0;
  const resetAll = () => {
    setVarAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Increment by
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(decrementByAmount(addValue))}>
          Decrement by
        </button>
        <button onClick={resetAll}>Reset</button>
        <div>
          <input
            type="text"
            value={varAmount}
            onChange={(event) => setVarAmount(event.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default Counter;
