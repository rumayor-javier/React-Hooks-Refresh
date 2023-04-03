import React from "react";
import ReactDOM from "react-dom/client";
import { routesConfig } from "./09-useContext/routesConfig";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { TodoApp } from "./08-useReducer/TodoApp";
// import "./08-useReducer/intro-reducer";
// import { FatherComp } from "./07-exers-memo/FatherComp";
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
// import { MainApp } from "./09-useContext/MainApp";

import "./index.css";

const router = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
