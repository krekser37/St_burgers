import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/app/App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./services/store.ts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Оборачиваем приложение компонентом Provider из пакета react-redux
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
