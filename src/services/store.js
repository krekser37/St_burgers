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
  WS_GET_ORDERS,
  WS_SEND_ORDERS
} from './actions/wsActions';

import {
  WS_CONNECTION_START_OWNER,
  WS_CONNECTION_SUCCESS_OWNER,
  WS_CONNECTION_CLOSED_OWNER,
  WS_CONNECTION_ERROR_OWNER,
  WS_GET_ORDERS_OWNER,
  WS_SEND_ORDERS_OWNER
} from './actions/wsActionsOwner';

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';

const wsUrlOwner = 'wss://norma.nomoreparties.space/orders';

const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  wsOnSend: WS_GET_ORDERS,
  wsOnMessage: WS_SEND_ORDERS,
};

const wsActionsOwner = {
  wsInitWithToken: WS_CONNECTION_START_OWNER,
  onOpen: WS_CONNECTION_SUCCESS_OWNER,
  onClose: WS_CONNECTION_CLOSED_OWNER,
  onError: WS_CONNECTION_ERROR_OWNER,
  wsOnSend: WS_GET_ORDERS_OWNER,
  wsOnMessage: WS_SEND_ORDERS_OWNER,
};

const composeEnhancers =
typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions/* , false */), socketMiddleware(wsUrlOwner, wsActionsOwner/* , true */)));

// Инициализируем хранилище с помощью корневого редьюсера
export const store = createStore(rootReducer, enhancer);
