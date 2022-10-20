import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/app/App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./services/store";

const root = ReactDOM.createRoot(
  document.getElementById("root")!); //as HTMLElement или !
  
root.render(
  //Оборачиваем приложение компонентом Provider из пакета react-redux
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
