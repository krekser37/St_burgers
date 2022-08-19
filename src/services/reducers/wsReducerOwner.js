import {
  WS_CONNECTION_SUCCESS_OWNER,
  WS_CONNECTION_ERROR_OWNER,
  WS_CONNECTION_CLOSED_OWNER,
  WS_GET_ORDERS_OWNER,
} from "../actions/wsActionsOwner";

const initialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsReducerOwner = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS_OWNER:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR_OWNER:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED_OWNER:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_ORDERS_OWNER:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    default:
      return state;
  }
};
