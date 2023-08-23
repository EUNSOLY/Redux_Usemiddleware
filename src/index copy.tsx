import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

import rootReducer from "./reducers";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const render = () =>
  root.render(
    <React.StrictMode>
      <App
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDcrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </React.StrictMode>
  );
render();
store.subscribe(render);
reportWebVitals();
