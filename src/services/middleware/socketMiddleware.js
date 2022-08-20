import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (wsUrl, wsActions/* , isAuth */) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsInitOwner, wsSendOrders, onOpen, onClose, onError, onOrders } =
        wsActions;

      if (type === wsInit) {
     /*    console.log('Socket with all orders create'); */
        socket = new WebSocket(wsUrl);
       /*  console.log(socket); */
      } else if (type === wsInitOwner) {
        /* console.log('Socket with my orders create'); */
        const accessToken = getCookie("token");
        /* console.log(accessToken); */
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
        /* console.log(socket); */
      }

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

          dispatch({ type: onOrders, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendOrders) {
          const orders = { ...payload };
          socket.send(JSON.stringify(orders));
        }
      }

      next(action);
    };
  };
};
