import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";

const initialState = 0;
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(action);
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

export const allReducer = combineReducers({
  counter: counterReducer,
});

export const App = () => {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {count}</h1>
      {console.log("This is here", count)}
      <button onClick={() => dispatch({ type: "INCREMENT" })}> +</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
    </div>
  );
};
