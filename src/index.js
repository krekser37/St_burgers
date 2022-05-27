import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { compose, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// Корневой редьюсер, который обрабатывает экшены
import { rootReducer } from "./services/reducers/index";
import reportWebVitals from "./reportWebVitals";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

// Инициализируем хранилище с помощью корневого редьюсера
const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    //Оборачиваем приложение компонентом Provider из пакета react-redux
    <Provider store={store}>
      <App />
    </Provider>
  
);

reportWebVitals();
