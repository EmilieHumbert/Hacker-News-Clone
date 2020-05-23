import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./components/App";
import GlobalStyles from "./styles/globals";
import * as serviceWorker from "./serviceWorker";

const renderApp = () => {
  const store = configureStore({});

  if (process.env.NODE_ENV !== "production") {
    console.log("Initial state ->");
    console.log(store.getState());
  }

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <GlobalStyles />
          <App />
        </div>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
