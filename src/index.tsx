import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import App from "./App";
import Loader from "./component/Loader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <Loader>
          code-<span className={"text-primary"}>grow.dev</span>
        </Loader>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
);
