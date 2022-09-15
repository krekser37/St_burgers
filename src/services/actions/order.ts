import { getApiOrder } from "../../utils/burger-api";
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, DELETE_INGREDIENT, GET_ORDER_FAILED, SET_ORDER_MODAL, RESET_ORDER_MODAL } from "../constants/ingredients";
import { AppDispatch, AppThunk } from "../types";

export type TOrder =
IGetOrderSuccess
| IGetOrderRequest
| ISetOrderModal
| IGetOrderFailed
| IResetOrderModal
| IDeleteFromOrder
;

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: number;
/*   order type: typeof number; */
}

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface ISetOrderModal {
  readonly type: typeof SET_ORDER_MODAL;
}

export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
}

export interface IResetOrderModal {
  readonly type: typeof RESET_ORDER_MODAL;
}

export interface IDeleteFromOrder {
  type: typeof DELETE_INGREDIENT;
}


export const getOrder: AppThunk = (orderIngredients) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    getApiOrder(orderIngredients)
      .then((res) => {
        if (res /* && res.success */) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            res,
            /* order: res.order.number, */
          });
        }
      })
      .then(()=>dispatch({type: SET_ORDER_MODAL}))
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          payload: err,
        });
      });
  };
}

export const resetOrderModal = (): IResetOrderModal => {
  return {
    type: RESET_ORDER_MODAL,
  }
}

export const deleteFromOrder = (): IDeleteFromOrder => ({
  type: DELETE_INGREDIENT,
});