

export type TUser = {
    readonly id?: number;
    readonly password?: string;
    readonly email: string;
    readonly name: string;
  };

  export type TAuth = {
    readonly accessToken: string;
    readonly refreshToken: string;
    readonly success: boolean;
    readonly user: TUser;
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
  id?: string;
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
  orders: TOrderDetails[];
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