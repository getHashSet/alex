import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App.jsx";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import allReducers from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as theme from "./theme";

// ========= //
//   STORE   //
// ========= //
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // Makes redux visible in Chrome dev tools

// ======== //
//   ROOT   //
// ======== //
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ================== //
//   SERVICE WORKER   //
// ================== //
serviceWorker.unregister();
