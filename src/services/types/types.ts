import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE } from "../constants/wsActions";


export type TUser = {
    readonly id?: number;
    readonly name: string;
    readonly email: string;
    readonly password?: string;
  };

  export type TAuth = {
    readonly accessToken: string;
    readonly refreshToken: string;
    readonly success: boolean;
    user?: TUser ;
  };

export type TIngredient = {
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: "bun" | "main" | "sauce";
  readonly __v: number;
  readonly _id: string;
  id: string ;
  count?: number;
};

export type TOrderDetails = {
  ingredients: Array<string>;
  _id: string;
  name: string;
  status: string;
  number: number;
  createdAt: string;
  id?: string;
};

export type TOrder = {
  wsConnected: boolean;
  orders: TOrderDetails;
  total: number;
  totalToday: number;
};

export type TLogoutResponse = {
  success: boolean;
  message: string;
}

export type TOrdersResponse= {
  name: string;
  order: { number: number } ;
  success: boolean;
}

export type TWsSocketMiddlewareActions = {
  wsInit?: typeof WS_CONNECTION_START,
  onOpen: typeof WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof WS_CONNECTION_ERROR,
  wsOnSend: typeof WS_SEND_MESSAGE ,
  wsOnMessage: typeof WS_GET_MESSAGE,
}

export type TIngredientsResponse = {
readonly data: Array<TIngredient>,
readonly success:  string,

}