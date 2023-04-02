import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const someHeavyProcess = (iterations = 1000) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Doing something...");
  }
  return `${iterations} iterations done`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(false);

  const memorizedValue = useMemo(() => someHeavyProcess(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <h4>{memorizedValue}</h4>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Re-render component
      </button>
    </>
  );
};
