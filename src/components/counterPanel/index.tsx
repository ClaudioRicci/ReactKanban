import React, { useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

const CounterPanel = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};

export default CounterPanel;
