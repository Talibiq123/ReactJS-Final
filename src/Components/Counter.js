import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    // setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    setCount((count) => (count > 0 ? count - 1 : 0));
  }

  function reset() {
    setCount(0);
  }
  return (
    <div style={{ marginTop: "25px" }}>
      <h1>Count = {count}</h1>
      <br />
      <button
        onClick={increment}
        style={{ marginTop: "10px"}}
      >
        {<FaPlus />}
      </button>
      <button
        onClick={decrement}
        style={{ marginTop: "10px"}}
      >
        {<FaMinus />}
      </button>
      <button onClick={reset} style={{ marginTop: "10px" }}>
        {<GrPowerReset />}
      </button>
    </div>
  );
};
export default Counter;
