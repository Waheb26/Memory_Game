"use client";

import { use } from "react";

const { useState } = require("react");

function Counter() {
  const [count, setCount] = useState("0");

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
}
export default Counter;
