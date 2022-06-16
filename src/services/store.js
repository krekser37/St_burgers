import { compose, applyMiddleware, createStore } from "redux";
// Корневой редьюсер, который обрабатывает экшены
import { rootReducer } from "./reducers/index";
import thunk from 'redux-thunk';

const composeEnhancers =
typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

// Инициализируем хранилище с помощью корневого редьюсера
export const store = createStore(rootReducer, enhancer);
