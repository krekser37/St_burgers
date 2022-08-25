import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (wsUrl, wsActions/* , isAuth */) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsInitWithToken, wsOnMessage, onOpen, onClose, onError, wsOnSend } =
        wsActions;

        if (type === wsInit) {
          socket = new WebSocket(payload);
        }

/*       if (type === wsInit) {
        socket = new WebSocket(wsUrl);
      } else if (type === wsInitWithToken) {
        const accessToken = getCookie("token");
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
      } */

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: wsOnSend, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsOnMessage) {
          const orders = { ...payload };
          socket.send(JSON.stringify(orders));
        }
      }

      next(action);
    };
  };
};
