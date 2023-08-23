import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("store", store);
  console.log("action", action);
  next(action); // action을 넣어서 다음작업으로 이동시켜주는
};
const middleware = applyMiddleware(thunk, loggerMiddleware);
const store = createStore(rootReducer, middleware);
const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDcrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </React.StrictMode>
  );
render();
store.subscribe(render);
reportWebVitals();
