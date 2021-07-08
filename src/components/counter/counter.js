import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="counter-box">
        <h1>Click Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Clickk</button>
      </div>
    </div>
  );
};

export default Counter;
