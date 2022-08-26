import { compose, applyMiddleware, createStore } from "redux";
// Корневой редьюсер, который обрабатывает экшены
import { rootReducer } from "./reducers/index";
import { socketMiddleware } from './middleware/socketMiddleware';
import thunk from 'redux-thunk';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from './actions/wsActions';


const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  wsOnSend: WS_GET_MESSAGE,
  wsOnMessage: WS_SEND_MESSAGE,
};

const composeEnhancers =
typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions)));

// Инициализируем хранилище с помощью корневого редьюсера
export const store = createStore(rootReducer, enhancer);
