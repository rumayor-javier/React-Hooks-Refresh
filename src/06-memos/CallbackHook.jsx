import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((addValue) => {
    setCounter((value) => value + addValue);
  }, []);

  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
