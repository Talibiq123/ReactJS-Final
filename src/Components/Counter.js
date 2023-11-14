import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }

  function reset() {
    setCount(0);
  }
  return (
    <div style={{ marginTop: "25px" }}>
      <p>Count = {count}</p>
      <br />
      <button
        onClick={increment}
        style={{ marginTop: "10px", marginRight: "10px" }}
      >
        increment
      </button>
      <button
        onClick={decrement}
        style={{ marginTop: "10px", marginRight: "10px" }}
      >
        decrement
      </button>
      <button onClick={reset} style={{ marginTop: "10px" }}>
        reset
      </button>
    </div>
  );
};
export default Counter;
