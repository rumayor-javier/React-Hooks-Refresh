import React, { useCallback } from "react";
import { ChildComp } from "./ChildComp";
import { useState } from "react";

export const FatherComp = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = useCallback((num) => {
    setValue((value) => value + num);
  }, []);

  return (
    <div>
      <h1>Father Component</h1>
      <p> Total: {value} </p>

      <hr />

      {numbers.map((n) => (
        <ChildComp key={n} number={n} increment={increment} />
      ))}
    </div>
  );
};
