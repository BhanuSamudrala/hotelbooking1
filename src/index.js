import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { HolidayContextProvider } from "./Holiday/HolidayContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HolidayContextProvider>
        <App />
      </HolidayContextProvider>
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
