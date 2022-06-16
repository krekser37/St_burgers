import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./services/store.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    //Оборачиваем приложение компонентом Provider из пакета react-redux
    <Provider store={store}>
      <App />
    </Provider>
  
);

reportWebVitals();
