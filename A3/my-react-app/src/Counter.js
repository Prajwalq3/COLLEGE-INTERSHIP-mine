import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let resetCount = () => {
    setCount(0);
  }

  return (
    <div className="app">
        <p>Count: {count}</p>
        <div className="buttons">
          <Button title={"Decrement"} action={decrementCount} />
          <Button title={"Increment"} action={incrementCount} />
          <Button title={"Reset"} action={resetCount} />
        </div>
      </div>
  );
}

export default Counter;