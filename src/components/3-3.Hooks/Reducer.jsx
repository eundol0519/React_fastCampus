import React, { useReducer } from "react";

export default function Reducer() {
  const initialCount = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "reset":
        return initialCount;
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialCount);

  return (
    <div>
      Count : {state.count}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </div>
  );
}
