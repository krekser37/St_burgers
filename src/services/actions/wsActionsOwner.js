export const WS_CONNECTION_START_OWNER = "WS_CONNECTION_START_OWNER";
export const WS_CONNECTION_SUCCESS_OWNER = "WS_CONNECTION_SUCCESS_OWNER";
export const WS_CONNECTION_ERROR_OWNER = "WS_CONNECTION_ERROR_OWNER";
export const WS_CONNECTION_CLOSED_OWNER = "WS_CONNECTION_CLOSED_OWNER";
export const WS_GET_ORDERS_OWNER = "WS_GET_ORDERS_OWNER";
export const WS_SEND_ORDERS_OWNER = "WS_SEND_ORDERS_OWNER";

export const wsConnectionStartOwner = () => {
  return {
    type: WS_CONNECTION_START_OWNER,
  };
};

export const wsConnectionSuccessOwner = () => {
  return {
    type: WS_CONNECTION_SUCCESS_OWNER,
  };
};

export const wsConnectionErrorOwner = () => {
  return {
    type: WS_CONNECTION_ERROR_OWNER,
  };
};

export const wsConnectionClosedOwner = () => {
  return {
    type: WS_CONNECTION_CLOSED_OWNER,
  };
};

export const wsGetOrdersOwner = (order) => {
  return {
    type: WS_GET_ORDERS_OWNER,
    payload: order,
  };
};

export const wsSendOrdersOwner = (order) => {
  return {
    type: WS_SEND_ORDERS_OWNER,
    payload: order,
  };
};
