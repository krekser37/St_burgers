import { Middleware, MiddlewareAPI } from "redux";
import { TWSActions } from "../actions/wsActions";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE } from "../constants/wsActions";

export const socketMiddleware = (actions:TWSActions): Middleware => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null  = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
/*       const { wsInit, wsOnMessage, onOpen, onClose, onError, wsOnSend } =
        wsActions; */

        if (type ===  WS_CONNECTION_START) {
          socket = new WebSocket(payload);
        }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type : WS_CONNECTION_SUCCESS, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: WS_SEND_MESSAGE, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        if (type === WS_GET_MESSAGE) {
          const orders = { ...payload };
          socket.send(JSON.stringify(orders));
        }
      }

      next(action);
    };
  };
};
