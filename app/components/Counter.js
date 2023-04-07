"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount((prevValue) => ++prevValue)}>
        Count
      </button>
    </>
  );
};

export default Counter;
