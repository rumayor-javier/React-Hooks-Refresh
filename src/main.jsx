import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FatherComp } from "./07-exers-memo/FatherComp";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWIthCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./07-useMemo/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FatherComp />
  </React.StrictMode>
);
