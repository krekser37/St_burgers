import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from "../constants/wsActions";
import { TOrder } from "../types/types";

export type TWSActions =
IWsConnectionStart
| IWsConnectionSuccess
| IWsConnectionError
| IWsConnectionClosed
| IWsGetMessage
| IWsSendWessage;

export interface IWsConnectionStart {
  type: typeof WS_CONNECTION_START;
  payload: string;
}

export interface IWsConnectionSuccess {
  type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionError {
  type: typeof WS_CONNECTION_ERROR;
}

export interface IWsConnectionClosed {
  type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessage {
  type: typeof WS_GET_MESSAGE;
  payload: TOrder
}

export interface IWsSendWessage {
  type: typeof WS_SEND_MESSAGE;
  payload: TOrder
}

export const wsConnectionStart = (url: string):IWsConnectionStart  => {
  return {
    type: WS_CONNECTION_START,
    payload: url,
  };
};

export const wsConnectionSuccess = (): IWsConnectionSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = (): IWsConnectionError => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = (): IWsConnectionClosed => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetMessage = (payload: TOrder): IWsGetMessage => {
  return {
    type: WS_GET_MESSAGE,
    payload,
  };
};

export const wsSendMessage = (payload: TOrder): IWsSendWessage => {
  return {
    type: WS_SEND_MESSAGE,
    payload,
  };
};
